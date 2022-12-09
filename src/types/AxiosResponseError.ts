import { AxiosError } from 'axios';

export type ServerError = {
  statusCode: number;
  message: string | string[];
  error?: string;
};

export type AxiosResponseError = AxiosError<ServerError>;
