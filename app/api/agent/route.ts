import { NextResponse } from "next/server";
import { autopilotAgent } from "@/lib/agent";
import { rateLimit } from "@/lib/security";

export async function POST(req: Request) {
  const ip = "global-user";

  if (!rateLimit(ip, 10)) {
    return NextResponse.json(
      { error: "Too many requests" },
      { status: 429 }
    );
  }

  const { userId, task } = await req.json();

  const result = await autopilotAgent(userId, task);

  return NextResponse.json({ result });
}