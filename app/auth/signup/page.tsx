export default function SignupPage() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="w-full max-w-md border border-white/10 rounded-2xl p-8">

        <h1 className="text-3xl font-bold mb-2">
          Create Account
        </h1>

        <p className="text-white/60 mb-6">
          Join AuraFlow
        </p>

        <input
          placeholder="Full Name"
          className="w-full p-3 mb-4 bg-white/5 border border-white/10 rounded-lg"
        />

        <input
          placeholder="Email"
          className="w-full p-3 mb-4 bg-white/5 border border-white/10 rounded-lg"
        />

        <input
          placeholder="Password"
          type="password"
          className="w-full p-3 mb-4 bg-white/5 border border-white/10 rounded-lg"
        />

        <button className="w-full bg-white text-black py-3 rounded-lg font-semibold">
          Create Account
        </button>

      </div>
    </div>
  );
}