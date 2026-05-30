export default function Dashboard() {
  return (
    <div className="min-h-screen bg-black text-white p-10">

      <h1 className="text-4xl font-bold">🚀 AuraFlow SaaS</h1>

      <div className="grid grid-cols-3 gap-6 mt-10">

        <div className="p-6 border border-white/10 rounded-xl">
          🔥 AI ENGINE ACTIVE
        </div>

        <div className="p-6 border border-white/10 rounded-xl">
          🔐 AUTH SYSTEM ACTIVE
        </div>

        <div className="p-6 border border-white/10 rounded-xl">
          💳 BILLING SYSTEM ACTIVE
        </div>

        <div className="p-6 border border-white/10 rounded-xl">
          🧠 ADMIN PANEL ACTIVE
        </div>

        <div className="p-6 border border-white/10 rounded-xl">
          🤖 AUTOPILOT AGENT RUNNING
        </div>

        <div className="p-6 border border-white/10 rounded-xl">
          💬 AI CHAT READY
        </div>

      </div>
    </div>
  );
}