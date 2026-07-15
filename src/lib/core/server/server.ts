import { baseUrl } from "../baseUrl";


export async function serverMutation<T>(
  api: string,
  method: "POST" | "PUT" | "PATCH" | "DELETE",
  data?: T
) {
  const res = await fetch(`${baseUrl}${api}`, {
    method,
    headers: {
      "Content-Type": "application/json",
    },
    body: data ? JSON.stringify(data) : undefined,
  });

  if (!res.ok) {
    throw new Error(`Request failed: ${res.status}`);
  }

  return res.json();
}

export async function serverFetch(api: string) {
  const res = await fetch(`${baseUrl}${api}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error(`Request failed: ${res.status}`);
  }

  return res.json();
}