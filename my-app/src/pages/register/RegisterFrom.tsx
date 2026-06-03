"use client";

import { useRouter } from "next/navigation";
import { useRegister } from "@/src/hooks/useRegister";

export const RegisterForm = () => {

  const router = useRouter()

  const handelRouter = () =>{
       router.push("pages/login")

  }



  const {name, email, password, loading,  error, setName, setEmail,setPassword, handleRegister,} = useRegister()
const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    await handleRegister();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-xl"
      >
        <h1 className="text-3xl font-bold text-white text-center mb-2">
          Create Account
        </h1>

        <p className="text-slate-400 text-center mb-8">
          Register to get started
        </p>

        <div className="flex flex-col gap-5">
          <div>
            <label className="block text-sm text-slate-300 mb-2">
              Name
            </label>

            <input
              type="text"
              placeholder="Tomás Salazar"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white outline-none focus:border-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm text-slate-300 mb-2">
              Email
            </label>

            <input
              type="email"
              placeholder="example@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white outline-none focus:border-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm text-slate-300 mb-2">
              Password
            </label>

            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white outline-none focus:border-blue-500"
              required
            />
          </div>

          {error && (
            <p className="text-red-500 text-sm">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="mt-2 w-full bg-blue-600 hover:bg-blue-700 transition-colors text-white font-semibold py-3 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Creating account..." : "Register"}
          </button>

          <div className="text-center">
            <span className="text-slate-400 text-sm">
              Already have an account?{" "}
            </span>

           <button onClick={handleRegister}>Login</button>
          </div>
        </div>
      </form>
    </div>
  );
};