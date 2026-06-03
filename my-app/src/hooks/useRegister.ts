// hooks/useRegister.ts

import { useState } from "react";
import { register } from "../services/register";

export const useRegister = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleRegister = async () => {
    try {
      setLoading(true);
      setError("");

      const data = await register({
          name,
        email,
        password
      }
      );

      console.log(data);
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      }
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