import axios, { AxiosRequestConfig, AxiosError, AxiosResponse } from 'axios';

const instance = axios.create({
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export async function caller(
  method: string,
  address: string,
  params: AxiosRequestConfig | any = {},
  config: AxiosRequestConfig = {},
): Promise<AxiosResponse> {
  const response = await instance[method](address, params, config).catch(
    (error: AxiosError) => {
      throw error;
    },
  );
  return response;
}

export async function GET(
  address: string,
  params: any = {},
  config: AxiosRequestConfig = {},
): Promise<unknown> {
  const response = await caller('get', address, {
    params,
    ...config,
  });
  return response.data;
}
