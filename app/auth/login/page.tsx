"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function LoginPage() {
  const [email, setEmail] = useState("");

  const login = async () => {
    const { error } = await supabase.auth.signInWithOtp({ email });

    if (error) {
      alert("Login Failed");
    } else {
      alert("Check your email for login link");
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-black text-white">

      <div className="w-96 p-8 border border-white/10 rounded-xl">

        <h1 className="text-2xl font-bold mb-5">Login</h1>

        <input
          className="w-full p-2 mb-3 bg-white/5 border border-white/10"
          placeholder="Enter Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <button
          onClick={login}
          className="w-full bg-white text-black py-2 rounded-lg"
        >
          Send Login Link
        </button>

      </div>

    </div>
  );
}