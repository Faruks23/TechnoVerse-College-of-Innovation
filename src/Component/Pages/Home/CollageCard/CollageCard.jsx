import React, { useEffect, useState } from "react";
import Loader from "../../../Loader/Loader";
import Card from "./card/Card";

const CollageCard = () => {

  const [colleges, setColleges]=useState([])
   const [loading,setLoading] = useState(true)

  useEffect(() => { 
    setLoading(true)
    fetch("http://localhost:5000/colleges")
      .then(res => res.json())
      .then(data => {
        setColleges(data)
        console.log(data);
        setLoading(false)
    })
  },[])

  return (
    <div>
      {loading ? (
        <>
          <Loader></Loader>
        </>
      ) : (
        <>
          <div className="flex justify-center items-center container mx-auto ">
            <div className="grid gird-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9">
              {colleges.slice(0, 3).map((item) => (
                <Card key={item._id} item={item}></Card>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CollageCard;