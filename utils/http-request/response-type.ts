export type SuccessResponseData = {
  code: number;
  data: Record<string, string>;
  message: string;
  ok: true;
};

export type FailsResponseData = {
  code: number;
  data: null;
  message: string;
  ok: false;
};
