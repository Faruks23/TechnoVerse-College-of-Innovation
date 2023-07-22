import React from "react";
import { FaSearch } from "react-icons/fa";
const SearchInput = () => {
  return (
    <div className="relative">
      <input
        type="text"
        className="w-64 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring focus:border-blue-300"
        placeholder="Search..."
      />
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <FaSearch className="w-5 h-5 text-gray-400" />
      </div>
    </div>
  );
};

export default SearchInput;
