import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
const SearchInput = () => {

  const [show,setshow]=useState(false)
  const handlShow = () => {
    setshow(true)
  }
  const handlHide= () => {
    setshow(false)
  }
  return (
    <>
      <div onClick={handlShow} className="relative ">
        <input
          type="text"
          className="w-64 md:w-[600px] px-4 py-2 border cursor-pointer border-gray-300 rounded-full focus:outline-none focus:ring focus:border-blue-300"
          placeholder="Search..."
        />
        <div className="absolute inset-y-0 right-0 mr-3 pl-3 flex items-center pointer-events-none ">
          <FaSearch className="w-5 h-5 text-gray-400" />
        </div>
      </div>

    </>
  );
};

export default SearchInput;
