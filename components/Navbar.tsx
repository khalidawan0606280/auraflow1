export default function Navbar() {
  return (
    <header className="border-b border-white/10 bg-black text-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        <h1 className="font-bold text-xl">AuraFlow</h1>

        <nav className="flex gap-6 text-white/70">
          <a href="/">Home</a>
          <a href="/dashboard">Dashboard</a>
          <a href="/ai">AI</a>
          <a href="/admin">Admin</a>
          <a href="/settings">Settings</a>
        </nav>
      </div>
    </header>
  );
}