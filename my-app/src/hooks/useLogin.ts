import { useState } from "react";
import { login } from "../services/login";

type LoggedUser = {
  _id: string;
  email: string;
};

export const useLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (): Promise<LoggedUser | null> => {
    try {
      setLoading(true);

      const user = await login({ email, password });
      return user;
    } catch (err) {
      // sin UI de error por ahora; si se quiere, se puede agregar estado error
      if (err instanceof Error) {
        console.error(err.message);
      } else {
        console.error(err);
      }
      return null;
    } finally {
      setLoading(false);
    }
  };

  return {
    handleLogin,
    email,
    password,
    loading,
    setEmail,
    setPassword,
  };
};

