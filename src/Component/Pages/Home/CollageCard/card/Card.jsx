import React, { useContext } from "react";
import './Card.css'
import { NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../../AuthPorvider/AuthProvider';

const Card = ({ item }) => {
  const {
    admissionDate,
    collegeImage,
    collegeName,
    collegeRating,
    details,
    researchCount,
    _id
  } = item;

  const { user } = useContext(AuthContext)
 
 
  return (
    <div className="p-3 c-card lg:w-[400px] lg:h-[390px] w-[300px] h-[100%] bg-slate-200 shadow-2xl border font-serif">
      <img className=" w-full lg:h-[200px]" src={collegeImage} alt="" />
      <p className="font-bold my-1">{collegeName}</p>
      <p>Admission: {admissionDate && admissionDate}</p>

      <p>Rating: {collegeRating}</p>
      <p> Research: {researchCount}</p>
      <p>Event: {details.events.slice(0, 14)}</p>

      <div>
        <NavLink to={`/details/${_id}`}>
          <button className="bt my-2 shadow-md"> View Details</button>
        </NavLink>
      </div>
    </div>
  );
};

export default Card;