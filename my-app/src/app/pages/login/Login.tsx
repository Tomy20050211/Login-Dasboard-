"use client";

import { LoginFormUI } from "@/src/components/forms/AuthForms";
import { useLogin } from "@/src/hooks/useLogin";

export const LoginForm = () => {
  const { email, password, loading, setEmail, setPassword, handleLogin } =useLogin();

  return (
    <LoginFormUI
      email={email}
      password={password}
      loading={loading}
      setEmail={setEmail}
      setPassword={setPassword}
      onLogin={async () => {
      await handleLogin();
      
      }}
    />
  );
};

