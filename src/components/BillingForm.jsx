import InputField from "./InputField";

const BillingForm = () => {
  return (
    <div className="bg-white rounded-xl p-8 w-full shadow-sm">

      <h1 className="text-3xl font-bold text-gray-900 mb-8">
        Review your details
      </h1>

      <h2 className="text-xl font-semibold mb-6">
        Billing Information
      </h2>

      <div className="grid grid-cols-2 gap-6">

        <InputField
          label="Company Name"
          placeholder="abhigyan"
        />

        <InputField
          label="Email"
          placeholder="abhigyan.pandey@getreelax.com"
        />

        <InputField
          label="GST Number"
          placeholder="GST Number"
          optional
        />

        <InputField
          label="PAN Number"
          placeholder="PAN Number"
          optional
        />

        <InputField
          label="Premise/House no."
          placeholder="Premise/House no."
        />

        <InputField
          label="Street"
          placeholder="Street"
        />

        <InputField
          label="State"
          placeholder="Select state"
        />

        <InputField
          label="City"
          placeholder="Select city"
        />

        <InputField
          label="Country"
          placeholder="India"
        />

        <InputField
          label="Pin Code"
          placeholder="Pincode"
        />
      </div>

      <div className="border-t mt-8 pt-6 flex justify-end gap-4">
        <button className="border px-6 py-3 rounded-md font-medium">
          Cancel
        </button>

        <button className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium">
          Save Details
        </button>
      </div>
    </div>
  );
};

export default BillingForm;