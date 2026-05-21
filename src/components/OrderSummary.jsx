import CouponCard from "./CouponCard";

const OrderSummary = () => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm w-[360px]">

      <h2 className="text-3xl font-bold mb-6">
        Order Summary
      </h2>

      <div className="border rounded-xl p-5 mb-5">

        <div className="flex justify-between items-start">

          <div>
            <h1 className="text-5xl font-bold">₹4,999</h1>
            <p className="text-gray-500 mt-2">
              Includes 5,000 credits/mo.
            </p>
          </div>

          <div className="text-right">
            <p className="text-blue-600 text-xs font-semibold">
              SELECTED PLAN
            </p>

            <h3 className="font-bold text-lg">
              Startup
            </h3>
          </div>
        </div>

        <button className="w-full border border-blue-500 rounded-full py-3 text-blue-600 mt-6 font-medium">
          Upgrade to Growth Plan
        </button>
      </div>

      <div className="border rounded-xl p-5">

        <div className="flex justify-between items-center border rounded-lg p-4 mb-4">
          <div>
            <h3 className="font-semibold">Wallet Balance</h3>
            <p className="text-xs text-gray-500">₹500.00 available</p>
          </div>

          <button className="border px-4 py-2 rounded-md text-blue-600 font-medium">
            Apply
          </button>
        </div>

        <div className="mb-4">
          <h3 className="font-semibold mb-3">
            Apply Coupon
          </h3>

          <input
            placeholder="Enter coupon code"
            className="w-full border rounded-md px-4 py-3 mb-4 outline-none"
          />

          <div className="space-y-3">
            <CouponCard
              title="WELCOME20"
              desc="20% off on your first month"
            />

            <CouponCard
              title="ANNUAL50"
              desc="50% off on annual plans"
            />
          </div>
        </div>

        <div className="mt-6 space-y-3">
          <div className="flex justify-between">
            <p>Subtotal</p>
            <p>₹14,999.00</p>
          </div>

          <div className="flex justify-between">
            <p>Tax (18% GST)</p>
            <p>₹1,079.64</p>
          </div>
        </div>

        <div className="border-t mt-5 pt-5 flex justify-between items-center">
          <h3 className="text-xl font-bold">
            Total due today
          </h3>

          <h2 className="text-4xl font-bold text-blue-600">
            16,078.64
          </h2>
        </div>

        <button className="bg-blue-600 text-white w-full py-4 rounded-md mt-6 font-semibold">
          Proceed to Payment
        </button>
      </div>
    </div>
  );
};

export default OrderSummary;