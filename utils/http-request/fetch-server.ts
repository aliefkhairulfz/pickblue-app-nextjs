import { appConfig } from "@/config/app-config";
import { getServerSessionCookie } from "../actions/get-serversession-cookie";

type FetchServer<B> = {
  path: string;
  method: "GET" | "POST" | "PATCH" | "DELETE";
  body?: B;
};

type FetchResponse<D, E> = {
  data: D | null;
  error: E | null;
};

export async function fetchServer<B, D, E>(
  args: FetchServer<B>,
): Promise<FetchResponse<D, E>> {
  const urlToFetch = `${appConfig.goApiUrl}${args.path}`;
  const session = await getServerSessionCookie();

  // CSRF TOKEN
  let csrfToken: string = "";
  try {
    console.log("server csrf fetching...");
    const response = await fetch(`${appConfig.goApiUrl}/auth/csrf-token`, {
      method: "POST",
    });

    if (!response.ok) {
      console.log("server fetch: response not ok");
      const dataFails: E = await response.json();
      return { data: null, error: dataFails };
    }

    const { data } = await response.json();
    csrfToken = data;
  } catch (err) {
    console.log("server fetch err");
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

  // ACTUAL FETCH
  const fetchBodyArgs =
    args.method === "GET"
      ? {
          method: args.method,
          headers: {
            Cookie: `session=${session}`,
            "Content-Type": "application/json",
            "X-CSRF-Token": csrfToken,
          },
        }
      : {
          method: args.method,
          headers: {
            Cookie: `session=${session}`,
            "Content-Type": "application/json",
            "X-CSRF-Token": csrfToken,
          },
          body: JSON.stringify(args.body),
        };

  try {
    console.log("server fetching...");
    const response = await fetch(urlToFetch, {
      ...fetchBodyArgs,
    });

    if (!response.ok) {
      console.log("server fetch: response not ok");
      const dataFails: E = await response.json();
      return { data: null, error: dataFails };
    }

    const dataSuccess: D = await response.json();
    return { data: dataSuccess, error: null };
  } catch (err) {
    console.log("server fetch err");
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
