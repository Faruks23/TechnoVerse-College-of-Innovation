import React, { useContext, useEffect, useState, } from "react";
import {useParams} from 'react-router-dom'
import { AuthContext } from '../../../AuthPorvider/AuthProvider';

const CollegeDitails = () => {
  const { id } = useParams();
  console.log(id);

  const [Details, setDetail] = useState({});
  useEffect(() => {
    fetch(`http://localhost:5000/Details/${id}`)
      .then((res) => res.json())
      .then((data) => setDetail(data));
  }, [id]);

  const {
    admissionDate,
    collegeImage,
    collegeName,
    collegeRating,
    details,
    researchCount,
    _id,
  } = Details;

  // admissionProcess, events, researchWorks, sportsCategories

  console.log(Details);
  return (
    <div className="container mx-auto flex justify-center  h-[100%] my-[100px]">
      <div className="p-3 c-card lg:w-[80%] lg:h-[100%] w-[95%] h-[100%] bg-slate-200 shadow-2xl border font-serif">
        <img className=" w-full lg:h-[500px]" src={collegeImage} alt="" />
        <p className="font-bold my-3">{collegeName}</p>
        <p>
          <span className="font-bold">Admission: </span>
          {admissionDate}
        </p>
        <p>
          <span className="font-bold">Rating:</span>
          {collegeRating}
        </p>
        <p>
          <span className="font-bold">Research: </span> {researchCount}
        </p>

        <p>
          {" "}
          <span className="font-bold">AdmissionProcess:</span>
          {details?.admissionProcess}
        </p>

        <p>
          {" "}
          <span className="font-bold">AdmissionProcess:</span>{" "}
          {details?.researchWorks}
        </p>

        <p>
          {" "}
          <span className="font-bold">AdmissionProcess:</span>{" "}
          {details?.sportsCategories}
        </p>

        <p>
          {" "}
          <span className="font-bold">Event:</span>
          {details?.events}
        </p>
      </div>
    </div>
  );
};

export default CollegeDitails;