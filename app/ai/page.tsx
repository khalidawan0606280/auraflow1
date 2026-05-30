"use client";

import { useState } from "react";

export default function AIPage() {
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState("");

  const runAI = async () => {
    const res = await fetch("/api/ai", {
      method: "POST",
      body: JSON.stringify({ prompt }),
    });

    const data = await res.json();
    setResult(data.result);
  };

  return (
    <div className="min-h-screen bg-black text-white p-10">

      <h1 className="text-3xl font-bold mb-6">AI Assistant 🤖</h1>

      <textarea
        className="w-full p-4 bg-white/5 border border-white/10 rounded-lg"
        rows={6}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Ask AI something..."
      />

      <button
        onClick={runAI}
        className="mt-4 bg-white text-black px-6 py-2 rounded-lg"
      >
        Run AI
      </button>

      <div className="mt-6 whitespace-pre-wrap">
        {result}
      </div>

    </div>
  );
}