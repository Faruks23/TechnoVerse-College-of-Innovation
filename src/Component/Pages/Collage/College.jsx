import React, { useState, useEffect } from "react";
import Card from "../Home/CollageCard/card/Card";
import Loader from "../../Loader/Loader";

const College = () => {
   const [colleges, setColleges]=useState([])
   const [loading,setLoading] = useState(true)

  useEffect(() => { 
    setLoading(true)
    fetch("http://localhost:5000/colleges")
      .then(res => res.json())
      .then(data => {
        setColleges(data)
       
        setLoading(false)
    })
  },[])

  return (
    <div>
      <div className="w-full h-[500px] relative mb-[100px] border">
        <img
          className=" blur-sm w-full h-full"
          src="https://images.unsplash.com/photo-1568792923760-d70635a89fdc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
          alt=""
        />

        <div className=" w-full  absolute top-40 z-50 flex flex-col justify-center items-center">
          <h1 className="text-2xl lg:text-5xl uppercase font-bold mb-5">
            Best <span className="text-pink-500">Colleges </span> in The world
          </h1>
          <p className="text-center font-serif lg:w-[500px] text-white">
            {" "}
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Perferendis provident labore iste sapiente, architecto distinctio
            dicta similique atque tempora pariatur corporis ipsum voluptatum quo
            sequi, est id illum fuga non.
          </p>
        </div>
      </div>

      {loading ? (
        <>
          <Loader></Loader>
        </>
      ) : (
        <>
          <div className="flex justify-center items-center container mx-auto mb-[150px]">
            <div className="grid gird-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9">
              {colleges.map((item) => (
                <Card key={item._id} item={item}></Card>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );

};

export default College;