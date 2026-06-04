"use client";

import { useRouter } from "next/navigation";
import { RegisterFormUI } from "@/src/components/forms/AuthForms";
import { useRegister } from "@/src/hooks/useRegister";

export const RegisterForm = () => {
  const router = useRouter();

  const {
    name,
    email,
    password,
    loading,
    error,
    setName,
    setEmail,
    setPassword,
    handleRegister,
  } = useRegister();

  return (
    <RegisterFormUI
      name={name}
      email={email}
      password={password}
      loading={loading}
      error={error}
      setName={setName}
      setEmail={setEmail}
      setPassword={setPassword}
      onGoToLogin={() => router.push("/login")}
      onRegister={async () => {
        const user = await handleRegister();
        if (user !== null) router.push("/login");
      }}
    />
  );
};

