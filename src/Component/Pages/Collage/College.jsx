import React, { useState, useEffect } from "react";
import Card from "../Home/CollageCard/card/Card";
import Loader from "../../Loader/Loader";
import Herro from "../../Shared/Herro/Herro";
import useColleges from "../../Hooks/useColleges";

const College = () => {
  
 const { colleges, loading } = useColleges();

  return (
    <div>
      <Herro
        img={
          "https://images.unsplash.com/photo-1568792923760-d70635a89fdc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
        }
        titlef={"Best"}
        titlel={"colleges"}
        subtitle={`   Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis
          provident labore iste sapiente, architecto distinctio dicta similique
          atque tempora pariatur corporis ipsum voluptatum quo sequi, est id
          illum fuga non.`}
        span={" in The world"}
      ></Herro>

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