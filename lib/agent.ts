import { runAI } from "@/lib/ai";
import { prisma } from "@/lib/db";

export async function autopilotAgent(userId: string, task: string) {
  const response = await runAI(`
You are AuraFlow AI Agent.

User Task:
${task}

Return structured action plan.
`);

  await prisma.project.create({
    data: {
      name: task,
      userId
    }
  });

  return response;
}