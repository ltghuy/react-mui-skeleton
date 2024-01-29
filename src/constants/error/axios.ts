export enum AXIOS_ERROR {
  ERR_BAD_REQUEST = 'ERR_BAD_REQUEST',
  ERR_NETWORK = 'ERR_NETWORK',
}

export const AXIOS_ERROR_MESSAGE: Record<AXIOS_ERROR, string> = {
  [AXIOS_ERROR.ERR_BAD_REQUEST]: 'Bad request',
  [AXIOS_ERROR.ERR_NETWORK]: 'Network error',
};
