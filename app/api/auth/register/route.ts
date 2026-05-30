import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export async function POST(req: Request) {
  const { name, email } = await req.json();

  const existing = await prisma.user.findUnique({
    where: { email },
  });

  if (existing) {
    return NextResponse.json({ error: "User already exists" }, { status: 400 });
  }

  const user = await prisma.user.create({
    data: {
      name,
      email,
      role: "user",
    },
  });

  return NextResponse.json({ success: true, user });
}