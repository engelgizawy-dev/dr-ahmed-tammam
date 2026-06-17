"use client";
import { useState } from "react";
import { useAuth } from "@/context/AuthContext";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { logIn } = useAuth(); // دي الداله اللي هتدخل الطالب

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await logIn(email, password);
      alert("تم تسجيل الدخول بنجاح يا بطل!");
    } catch (err) {
      alert("خطأ: " + err.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <form onSubmit={handleLogin} className="flex flex-col gap-4">
        <input type="email" placeholder="الإيميل" onChange={(e) => setEmail(e.target.value)} className="border p-2" />
        <input type="password" placeholder="الباسورد" onChange={(e) => setPassword(e.target.value)} className="border p-2" />
        <button type="submit" className="bg-[#C8D749] p-2 rounded">دخول</button>
      </form>
    </div>
  );
}
