const CouponCard = ({ title, desc }) => {
  return (
    <div className="border rounded-md px-4 py-4 flex justify-between items-center">
      <div>
        <h3 className="font-bold text-sm">{title}</h3>
        <p className="text-xs text-gray-400">{desc}</p>
      </div>

      <div className="w-5 h-5 border-2 border-blue-600 rounded-full"></div>
    </div>
  );
};

export default CouponCard;