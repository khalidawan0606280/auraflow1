import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { userId, plan, method } = await req.json();

  return NextResponse.json({
    success: true,
    message: "Payment request received",
    userId,
    plan,
    method,
    status: "PENDING_VERIFICATION",
    note: "Admin will verify payment manually",
  });
}