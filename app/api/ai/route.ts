import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { prompt } = await req.json();

    if (!prompt) {
      return NextResponse.json({ error: "No prompt provided" }, { status: 400 });
    }

    // SIMPLE AI LOGIC (upgrade later to OpenAI / Gemini)
    const response = generateAIResponse(prompt);

    return NextResponse.json({
      success: true,
      input: prompt,
      output: response,
      engine: "AuraFlow AI v1",
    });

  } catch (error) {
    return NextResponse.json({ error: "AI engine failed" }, { status: 500 });
  }
}

// 🔥 AUTOPILOT LOGIC CORE
function generateAIResponse(prompt: string) {
  const p = prompt.toLowerCase();

  if (p.includes("dashboard")) return "Creating dashboard module...";
  if (p.includes("sales")) return "Generating sales automation system...";
  if (p.includes("users")) return "Setting up multi-user SaaS system...";
  if (p.includes("money")) return "Connecting payment system...";
  
  return `AI processed: ${prompt}`;
}