import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { BillingDB } from "@/lib/billing";

export async function GET() {
  const users = await prisma.user.findMany();
  const projects = await prisma.project.findMany();

  return NextResponse.json({
    users,
    projects,
    invoices: BillingDB.invoices,
    system: "AuraFlow FULL CORE ACTIVE"
  });
}