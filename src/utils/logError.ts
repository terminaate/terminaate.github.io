import { getErrorObject } from '@/utils/getErrorObject';
import { AxiosResponseError } from '@/types/AxiosResponseError';

export const logError = (e: AxiosResponseError) => {
  if (!import.meta.env.PROD) {
    console.log(getErrorObject(e).message);
  }
};
