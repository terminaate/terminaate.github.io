import { AxiosResponseError, ServerError } from '@/types/AxiosResponseError';

export const getErrorObject = (
  e: AxiosResponseError,
): (ServerError & { message: string }) | AxiosResponseError => {
  if (!e.response) return e;
  const {
    response: { data },
  } = e;

  if (Array.isArray(data.message)) {
    return {
      ...data,
      message: data.message[0],
    };
  } else {
    return {
      ...data,
      message: data.message,
    };
  }
};
