export default function BillingPage() {
  return (
    <div className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-8">
        Billing
      </h1>

      <div className="grid md:grid-cols-3 gap-6">

        <div className="border border-white/10 p-6 rounded-xl">
          <h2 className="text-xl font-bold">Starter</h2>
          <p className="text-3xl mt-4">$9</p>
          <button className="mt-4 bg-white text-black px-4 py-2 rounded-lg">
            Pay with Payoneer
          </button>
        </div>

        <div className="border border-white/10 p-6 rounded-xl">
          <h2 className="text-xl font-bold">Pro</h2>
          <p className="text-3xl mt-4">$29</p>
          <button className="mt-4 bg-white text-black px-4 py-2 rounded-lg">
            Pay with Payoneer
          </button>
        </div>

        <div className="border border-white/10 p-6 rounded-xl">
          <h2 className="text-xl font-bold">Enterprise</h2>
          <p className="text-3xl mt-4">$99</p>
          <button className="mt-4 bg-white text-black px-4 py-2 rounded-lg">
            Contact Sales
          </button>
        </div>

      </div>
    </div>
  );
}