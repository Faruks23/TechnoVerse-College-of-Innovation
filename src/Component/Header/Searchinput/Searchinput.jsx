import React, { useState } from "react";
import { FaSearch } from "react-icons/fa"; 
import axios from "axios";
import Card from "../../Pages/Home/CollageCard/card/Card";
import Loader from "../../Loader/Loader";
import { Navigate } from "react-router-dom";
import { MagnifyingGlass } from "react-loader-spinner";
const SearchInput = () => {
 const [loader,setLoader]=useState(false);
const [searchQuery, setSearchQuery] = useState("");
const [searchResults, setSearchResults] = useState([]);
 

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

const handleSearch = async (event) => {
  event.preventDefault();
  const form = event.target
  const field = form.filed.value;
  if (!field) {
    alert(" input field cannot be empty");
    return;
  }
   
  try {
    setLoader(true)
    const response = await axios.get(
      `https://techno-verse-college-of-innovation-server.vercel.app/api/colleges/search?q=${searchQuery}`
    );
    setSearchResults(response.data);
    console.log(response.data, "search results");
    
    setLoader(false)
  } catch (error) {
    console.error("Error searching colleges:", error);
  }
  };
  
  const handleClos = () => {
    setSearchResults("")
  }


  return (
    <>
      <form onSubmit={handleSearch} className="relative flex gap-2 ">
        <input
          type="text"
          value={searchQuery}
          onChange={handleInputChange}
          name="filed"
          className="w-64 md:w-[600px] px-4 py-2 border cursor-pointer border-gray-300 rounded-full focus:outline-none focus:ring focus:border-blue-300"
          placeholder="Search..."
        />
        <div className="absolute inset-y-0 right-[100px] mr-3 pl-3 flex items-center pointer-events-none ">
          <FaSearch className="w-5 h-5 text-gray-400" />
        </div>
        <button type="submit" className="btn">
          Search
        </button>
      </form>

      {loader ? (
        <>
          <div className="flex justify-center items-center">
            <MagnifyingGlass
              visible={true}
              height="100"
              width="100"
              ariaLabel="MagnifyingGlass-loading"
              wrapperStyle={{}}
              wrapperClass="MagnifyingGlass-wrapper"
              glassColor="#c0efff"
              color="#e15b64"
            />
          </div>
        </>
      ) : (
        <>
          {searchResults.length > 0 ? (
            <div className="w-full relative bg-slate-50 rounded-md  px-[15%]  mb-[500px] mt-[200px] py-12">
              <p
                onClick={handleClos}
                className=" absolute top-10 right-10 cursor-pointer text-5xl"
              >
                x
              </p>
              <h2 className="font-bold my-3">Search Results:</h2>

              {searchResults.map((item) => (
                <Card key={item._id} item={item}></Card>
              ))}
            </div>
          ) : null}
        </>
      )}
    </>
  );
};

export default SearchInput;
