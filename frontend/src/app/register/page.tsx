"use client";

import RegisterForm from "@/components/auth/register-form";
import { register } from "@/services/api";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();

  const handleRegister = async (
    email: string,
    password: string,
    username: string
  ) => {
    try {
      await register(username, email, password);
      alert("Registration successful");
      router.push("/");
    } catch {
      alert("Registration failed");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="w-full max-w-md rounded-lg shadow-lg p-6">
        
        {/* Heading comes BEFORE the LoginForm */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold">Task Manager</h1>
          <p className="mt-2">Organize your tasks efficiently</p>
        </div>

        <RegisterForm onSubmit={handleRegister} buttonText="Register" />
      </div>
    </div>
  );
}
