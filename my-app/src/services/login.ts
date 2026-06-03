import { LoginProps } from "../types/interfaces/LoginProps";


export const login = async ({email, password}: LoginProps) => {
  const response = await fetch("/api/routeLogin", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      email,
      password
    })
  });

  const data = await response.json();

  console.log(data);
};