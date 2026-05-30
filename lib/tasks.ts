import { prisma } from "@/lib/db";

export async function createTask(userId: string, type: string, data: any) {
  return prisma.project.create({
    data: {
      name: type,
      userId
    }
  });
}