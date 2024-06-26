export type ApiRequestConfig = {
  url: string;
  method: 'get' | 'post' | 'delete';
  data?: Record<string, unknown>;
};

export type ApiMethodConfig = Omit<ApiRequestConfig, 'method'>;
