import { API_ROUTES } from '@constants/apiRoutes';
import { HTTP_STATUS } from '@constants/httpStatus';
import { mockAPI } from '@services/core';
import { exampleMockData } from '@services/example/mock.data';

//Submit referral
mockAPI.onGet(API_ROUTES.EXAMPLE).replyOnce(HTTP_STATUS.BAD_REQUEST);
mockAPI.onGet(API_ROUTES.EXAMPLE).replyOnce(HTTP_STATUS.OK, exampleMockData);
