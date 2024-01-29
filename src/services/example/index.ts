import { generatePath } from 'react-router';
import { API_ROUTES } from '@constants/apiRoutes';
import { Example } from '@models/example/entities.js';
import { apiMockInstance } from '@services/core';
import { QueryFunctionContext } from '@tanstack/react-query';

import './mock.js';

const getOne = async (context: QueryFunctionContext) => {
  return (
    await apiMockInstance.get<Example>(generatePath(API_ROUTES.EXAMPLE), {
      signal: context.signal,
    })
  ).data;
};

export const exampleService = {
  getOne,
};
