import { useState } from "react";
import { register } from "../services/register";

type RegisteredUser = {
  _id: string;
  email: string;
};

export const useRegister = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleRegister = async (): Promise<RegisteredUser | null> => {
    try {
      setLoading(true);
      setError("");

      const user = await register({ name, email, password });
      return user;
    } catch (err) {
      if (err instanceof Error) setError(err.message);
      return null;
    } finally {
      setLoading(false);
    }
  };

  return {
    name,
    email,
    password,
    loading,
    error,
    setName,
    setEmail,
    setPassword,
    handleRegister,
  };
};

