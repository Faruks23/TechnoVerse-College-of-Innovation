import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthPorvider/AuthProvider';
import CollageCard from '../Home/CollageCard/CollageCard';
import MyCollegeCard from './CollegeCard/CollegeCard';

const MyCollege = () => {
  const { user } = useContext(AuthContext)
  const [myColleges, setMycolleges] = useState([])
  useEffect(() => {
    fetch(`http://localhost:5000/MyCollege/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setMycolleges(data));
  }, [user]);
  console.log(myColleges);

  return (
    <>
      <div className=" container mx-auto">

      
  
          <div className="grid grid-cols-1">

            {
              myColleges.map(item => <MyCollegeCard key={item._id} item={item}></MyCollegeCard>
              )
            }
          </div>

        
        
       </div>

    
    </>
  );
};

export default MyCollege;