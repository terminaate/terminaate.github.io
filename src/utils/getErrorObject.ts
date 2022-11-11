export const getErrorObject = (e: any) => {
  if (Array.isArray(e.response!.data.message)) {
    return {
      ...e.response!.data,
      message: e.response!.data.message[0],
    };
  } else {
    return {
      ...e.response!.data,
      message: e.response!.data.message,
    };
  }
};