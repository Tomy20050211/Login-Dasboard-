"use client"

import { useLogin } from "../hooks/useLogin"


export const LoginForm = () =>{
    const {
    email,
    password,
    loading,
    setEmail,
    setPassword,
    handleLogin
  
  } = useLogin();

  const handleSubmit = async ( e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await handleLogin();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) =>
          setEmail(e.target.value)
        }
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) =>
          setPassword(e.target.value)
        }
      />

      <button
        type="submit"
        disabled={loading}
      >
        {loading
          ? "Entering..."
          : "access"}
      </button>
    </form>
  );
}