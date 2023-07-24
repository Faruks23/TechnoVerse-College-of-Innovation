import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthPorvider/AuthProvider';

const MyCollege = () => {
  const { user } = useContext(AuthContext)
  const [myColleges, setMycolleges] = useState([])
  useEffect(() => {
    fetch(`http://localhost:5000/MyCollege/${user?.email}`)
      .then(res => res.json())
    .then(data=>setMycolleges(data))
  }, [])
  console.log(myColleges);

  return (
    <></>
  );
};

export default MyCollege;