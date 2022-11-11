import { getErrorObject } from '@/utils/getErrorObject';

export const logError = (e: any) => {
  if (!import.meta.env.PROD) {
    console.log(getErrorObject(e).message);
  }
};