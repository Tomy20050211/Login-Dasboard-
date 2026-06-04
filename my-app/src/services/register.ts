import type { RegisterProps } from "../types/interfaces/RegisterProps";

type RegisterApiResponse = {
  message: string;
  user: {
    _id: string;
    email: string;
  };
};

export const register = async ({
  name,
  email,
  password,
}: RegisterProps): Promise<RegisterApiResponse["user"]> => {
  const response = await fetch("/api/routeRegister", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email, password }),
  });

  const data = (await response.json()) as Partial<
    RegisterApiResponse
  > & { message?: string };

  if (!response.ok) {
    throw new Error(data.message ?? "server error");
  }

  if (!data.user) {
    throw new Error(data.message ?? "server error");
  }

  return data.user;
};

