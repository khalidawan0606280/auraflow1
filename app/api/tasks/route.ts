import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export async function POST(req: Request) {
  const { userId, name } = await req.json();

  const task = await prisma.project.create({
    data: {
      name,
      userId
    }
  });

  return NextResponse.json(task);
}