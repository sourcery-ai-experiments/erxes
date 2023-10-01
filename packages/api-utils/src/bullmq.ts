import { debugError, } from './debuggers';
import { Queue, QueueEvents, isNotConnectionError, Worker } from 'bullmq';
import Redis from 'ioredis';
import * as dotenv from 'dotenv';
dotenv.config();

const { REDIS_HOST, REDIS_PORT, REDIS_PASSWORD } = process.env;

const connectionOptions = {
  host: REDIS_HOST,
  port: parseInt(REDIS_PORT || '6379', 10) || 6379,
  password: REDIS_PASSWORD
};

const connection = new Redis(connectionOptions);

function getMessageQueue(name: string): Queue {
  const queue = new Queue(name, {
    defaultJobOptions: {
      attempts: 19,
      backoff: {
        type: 'exponential',
        delay: 1000,
      },
      removeOnComplete: true,
      removeOnFail: true,
    },
    connection
  });
  return queue;
}

function getRpcQueue(name: string): Queue {
  const queue = new Queue(name, {
    defaultJobOptions: {
      attempts: 4,
      backoff: {
        type: 'exponential',
        delay: 1000,
      },
      removeOnFail: true,
    }, connection
  });
  return queue;
}

async function getQueueEvents(name: string): Promise<QueueEvents> {
  const queueEvents = new QueueEvents(name, {
    connection: {
      ...connectionOptions, maxRetriesPerRequest: null
    }
  });
  await queueEvents.waitUntilReady();
  return queueEvents;
}

async function cleanupQueue(queue: Queue) {
  try {
    await queue.close();
  } catch (e) {

  }
}
async function cleanupQueueEvents(queueEvents: QueueEvents) {
  try {
    await queueEvents.close();
  } catch (e) {

  }
  try {
    await queueEvents.disconnect();
  } catch (e) {

  }
}
export async function consumeQueue(queueName: string, callback: any) {
  try {
    new Worker(queueName, async job => {
      try {
        await callback(job.data);
      } catch (e) {
        debugError(
          `consumeQueue: Error occurred during callback ${queueName} ${e.message}`
        );
      }
    }, {
      connection
    });
  } catch (e) {
    debugError(
      `consumeQueue: Error occurred ${queueName} ${e.message}`
    );
  }
}


export async function consumeRPCQueueMq(queueName: string, callback: any) {
  try {
    new Worker(queueName, async job => {
      try {
        return await callback(job.data);
      } catch (e) {
        debugError(
          `consumeRPCQueueMq: Error occurred during callback ${queueName} ${e.message}`
        );
        return {
          status: 'error',
          errorMessage: e.message
        };
      }
    }, {
      connection
    });

  } catch (e) {
    debugError(
      `consumeRPCQueueMq: Error occurred ${queueName} ${e.message}`
    );
  }
};

export const sendMessage = async (queueName: string, data: any) => {
  try {
    const queue = getMessageQueue(queueName);
    await queue.add('message', data);
  } catch (e) {
    debugError(`sendMessage: Error occurred ${queueName} ${e.message}`);
  }
};


export const sendRPCMessageMq = async (queueName: string, data: any) => {
  try {
    const queue = getRpcQueue(queueName);
    const queueEvents = await getQueueEvents(queueName);
    const job = await queue.add('job', data);
    const result = await job.waitUntilFinished(queueEvents);
    await job.remove();
    await cleanupQueueEvents(queueEvents);
    await cleanupQueue(queue);
    return result;
  } catch (e) {
    debugError(`sendRPCMessageMq: Error ${queueName} ${e.message}`);
  }
}