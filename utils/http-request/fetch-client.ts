import { appConfig } from "../config/app-config";

type FetchClient<B> = {
  path: string;
  method: "GET" | "POST" | "PATCH" | "DELETE";
  body?: B;
};

type FetchResponse<D, E> = {
  data: D | null;
  error: E | null;
};

export async function fetchClient<B, D, E>(
  args: FetchClient<B>,
): Promise<FetchResponse<D, E>> {
  const urlToFetch = `${appConfig.goApiUrl}${args.path}`;

  // CSRF TOKEN
  let csrfToken: string = "";
  try {
    console.log("client csrf fetching...");
    const response = await fetch(`${appConfig.goApiUrl}/auth/csrf-token`, {
      method: "POST",
    });

    if (!response.ok) {
      console.log("client fetch: response not ok");
      const dataFails: E = await response.json();
      return { data: null, error: dataFails };
    }

    const { data } = await response.json();
    csrfToken = data;
  } catch (err) {
    console.log("client fetch err");
    const errorObject = {
      code: err,
      data: null,
      message: err instanceof Error ? err.message : "internal server error",
      ok: false,
    };

    return {
      data: null,
      error: errorObject as E,
    };
  }

  const fetchBodyArgs =
    args.method == "GET"
      ? {
          method: args.method,
          headers: {
            "Content-Type": "application/json",
            "X-CSRF-Token": csrfToken,
          },
        }
      : {
          method: args.method,
          headers: {
            "Content-Type": "application/json",
            "X-CSRF-Token": csrfToken,
          },
          body: JSON.stringify(args.body),
        };

  // ACTUAL FETCH
  try {
    console.log("client fetching...");
    const response = await fetch(urlToFetch, {
      ...fetchBodyArgs,
      credentials: "include",
    });

    if (!response.ok) {
      console.log("client fetch: response not ok");
      const dataFails: E = await response.json();
      return { data: null, error: dataFails };
    }

    const dataSuccess: D = await response.json();
    return { data: dataSuccess, error: null };
  } catch (err) {
    console.log("client fetch err");
    const errorObject = {
      code: err,
      data: null,
      message: err instanceof Error ? err.message : "internal server error",
      ok: false,
    };

    return {
      data: null,
      error: errorObject as E,
    };
  }
}
