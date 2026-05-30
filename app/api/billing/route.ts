import { NextResponse } from "next/server";
import { createInvoice, BillingDB } from "@/lib/billing";

export async function POST(req: Request) {
  const { userId, amount } = await req.json();

  const invoice = createInvoice(userId, amount);
  BillingDB.add(invoice);

  return NextResponse.json({
    success: true,
    invoice
  });
}