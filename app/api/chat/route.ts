import { NextResponse } from "next/server";
import { runAI } from "@/lib/ai";
import { rateLimit } from "@/lib/security";

export async function POST(req: Request) {
  const { message } = await req.json();

  if (!rateLimit("chat-user", 20)) {
    return NextResponse.json({ error: "Rate limit hit" }, { status: 429 });
  }

  const reply = await runAI(message);

  return NextResponse.json({ reply });
}