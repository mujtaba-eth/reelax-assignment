const InputField = ({ label, placeholder, optional }) => {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium text-gray-700">
        {label}
        {optional && (
          <span className="text-gray-400"> (Optional)</span>
        )}
      </label>

      <input
        type="text"
        placeholder={placeholder}
        className="border border-gray-200 rounded-md px-4 py-3 outline-none focus:border-blue-500 text-sm bg-[#fafafa]"
      />
    </div>
  )
}

export default InputField