"use server";

import { cookies } from "next/headers";

export async function getServerSessionCookie() {
  const getSession = await cookies();
  const session = getSession.get("session");

  if (session) {
    console.log("session token:", session.value);
    return session.value;
  } else {
    console.log("session token not found");
    return null;
  }
}
