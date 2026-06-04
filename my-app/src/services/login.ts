import type { LoginProps } from "../types/interfaces/LoginProps";

type LoginApiResponse = {
  message: string;
  user: {
    _id: string;
    email: string;
  };
};

export const login = async ({
  email,
  password,
}: LoginProps): Promise<LoginApiResponse["user"]> => {
  const response = await fetch("/api/routeLogin", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  const data = (await response.json()) as Partial<
    LoginApiResponse
  > & { message?: string };

  if (!response.ok) {
    throw new Error(data.message ?? "server error");
  }

  if (!data.user) {
    throw new Error(data.message ?? "server error");
  }

  return data.user;
};

