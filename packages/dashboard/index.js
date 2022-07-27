// const CubejsServer = require('@cubejs-backend/server');
// const dotenv = require('dotenv');
// const jwt = require('jsonwebtoken');
import { getServices } from '@erxes/api-utils/src/serviceDiscovery';

dotenv.config();

const { CUBEJS_API_SECRET, DB_NAME } = process.env;

const server = new CubejsServer({});

server
  .listen()
  .then(({ app, port }) => {
    app.get('/get-token', (_req, res) => {
      const dashboardToken = jwt.sign({}, CUBEJS_API_SECRET || 'secret', {
        expiresIn: '10day'
      });
      const aa = getServices();

      console.log(aa);

      return res.send({
        dashboardToken: dashboardToken
      });
    });

    console.log(`🚀 Cube.js server is listening on ${port} dbname ${DB_NAME}`);
  })
  .catch(e => {
    console.error('Fatal error during server start: ');
    console.error(e.stack || e);
  });
