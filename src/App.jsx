import Header from "./components/Header";
import BillingForm from "./components/BillingForm";
import OrderSummary from "./components/OrderSummary";


function App() {
  return (
    <div className="min-h-screen bg-[#f5f6fa]">

      <Header />

      <div className="max-w-[1400px] mx-auto px-8 py-6">

        <button className="border px-5 py-2 rounded-md text-gray-600 bg-white mb-6">
          ← Back to plans
        </button>

        <div className="grid grid-cols-[1fr_380px] gap-8">

          <BillingForm />

          <OrderSummary />
        </div>
      </div>
    </div>
  );
}

export default App;
