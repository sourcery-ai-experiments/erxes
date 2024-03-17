import React from 'react';
import * as compose from 'lodash.flowright';
import { gql } from '@apollo/client';
import { graphql } from '@apollo/client/react/hoc';
import { queries as taskQueries } from '../../../tasks/graphql';
import { withProps } from '@erxes/ui/src/utils';
import { IOptions } from '../../types';
import { IQueryParams } from '@erxes/ui/src/types';
import { getFilterParams } from '../../utils';
import { TasksQueryResponse } from '../../../tasks/types';
import ChildrenSectionComponent from '../../components/editForm/ChildrenSection';

type Props = {
  type: string;
  parentId?: string;
  itemId: string;
  stageId: string;
  queryParams: IQueryParams;
  options: IOptions;
  pipelineId: string;
};

type FinalProps = {
  taskQueries: TasksQueryResponse;
} & Props;

class ChildrenSection extends React.Component<FinalProps> {
  render() {
    const { type, taskQueries, parentId, options } = this.props;

    let children: any[] = [];
    let refetch;

    if (type === 'task') {
      children = taskQueries.tasks;
      refetch = taskQueries.refetch;
    }

    const updatedProps = {
      ...this.props,
      children,
      parentId: parentId || '',
      options,
      refetch,
    };

    return <ChildrenSectionComponent {...updatedProps} />;
  }
}

const commonFilter = ({
  itemId,
  queryParams,
  options,
}: {
  itemId: string;
  queryParams: IQueryParams;
  options: IOptions;
}) => ({
  variables: {
    parentId: itemId,
    ...getFilterParams(queryParams, options.getExtraParams),
    hasStartAndCloseDate: false,
  },
});

export default withProps<Props>(
  compose(
    graphql<Props>(gql(taskQueries.tasks), {
      name: 'taskQueries',
      skip: ({ type }) => type !== 'task',
      options: (props) => commonFilter(props),
    })
  )(ChildrenSection)
);