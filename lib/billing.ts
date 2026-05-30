export function createInvoice(userId: string, amount: number) {
  return {
    id: crypto.randomUUID(),
    userId,
    amount,
    status: "pending",
    createdAt: new Date()
  };
}

// NEW: Payment tracking system
export const BillingDB = {
  invoices: [] as any[],

  add(invoice: any) {
    this.invoices.push(invoice);
    return invoice;
  },

  getAll(userId: string) {
    return this.invoices.filter(i => i.userId === userId);
  }
};