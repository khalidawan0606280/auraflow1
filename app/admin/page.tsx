"use client";

export default function AdminPanel() {
  return (
    <div className="min-h-screen bg-black text-white p-8">

      <h1 className="text-3xl font-bold mb-6">
        🧠 AuraFlow Admin Control Center
      </h1>

      <div className="grid grid-cols-3 gap-4">

        <div className="p-5 border border-white/10 rounded-xl">
          <h2 className="text-xl">Users</h2>
          <p className="text-white/60">Manage all users</p>
        </div>

        <div className="p-5 border border-white/10 rounded-xl">
          <h2 className="text-xl">AI Logs</h2>
          <p className="text-white/60">Track AI usage</p>
        </div>

        <div className="p-5 border border-white/10 rounded-xl">
          <h2 className="text-xl">Payments</h2>
          <p className="text-white/60">Verify transactions</p>
        </div>

        <div className="p-5 border border-white/10 rounded-xl">
          <h2 className="text-xl">System Health</h2>
          <p className="text-white/60">Server status</p>
        </div>

        <div className="p-5 border border-white/10 rounded-xl">
          <h2 className="text-xl">Projects</h2>
          <p className="text-white/60">All SaaS projects</p>
        </div>

        <div className="p-5 border border-white/10 rounded-xl">
          <h2 className="text-xl">Settings</h2>
          <p className="text-white/60">System config</p>
        </div>

      </div>

    </div>
  );
}