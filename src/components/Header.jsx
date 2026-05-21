import { FiSearch, FiMenu } from "react-icons/fi";

const Header = () => {
  return (
    <div className="bg-white border-b px-6 py-3 flex justify-between items-center">

      <div className="relative w-[350px]">
        <FiSearch className="absolute top-3.5 right-4 text-gray-400" />

        <input
          type="text"
          placeholder="Find influencers to collaborate with"
          className="w-full border rounded-md px-4 py-3 text-sm outline-none"
        />
      </div>

      <div className="flex items-center gap-4">

        <button className="bg-yellow-500 text-white text-sm px-4 py-2 rounded-md">
          Upgrade
        </button>

        <button className="bg-blue-600 text-white text-sm px-4 py-2 rounded-md">
          + Create
        </button>

        <div className="w-10 h-10 rounded-full bg-blue-900 text-white flex items-center justify-center font-bold">
          M
        </div>

        <FiMenu size={22} />
      </div>
    </div>
  );
};

export default Header;