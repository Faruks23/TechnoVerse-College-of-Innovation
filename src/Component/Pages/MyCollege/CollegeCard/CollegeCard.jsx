import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import ReviewModal from "../ReviewModal/ReviewModal";

const MyCollegeCard = ({ item }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [collageName ,setCollogename] = useState('')
  const handleOpenModal = (collageName) => {

    setIsModalOpen(true)
    setCollogename(collageName)
   
 }
   
  return (
    <>
      <div className="card card-side bg-base-100 shadow-xl border lg:p-10 font-serif">
        <figure>
          <img
            className="w-[250px] h-[200px]"
            src={item.item.collegeImage}
            alt="Movie"
          />
        </figure>
        <div className="card-body">
          <h2 className="font-bold lg:text-3xl">{item.item.collegeName}</h2>
          <p>
            Rating: <span>{item.item.collegeRating}</span>{" "}
          </p>
          <p>
            {" "}
            Research: <span>{item.item.researchCount}</span>{" "}
          </p>
          <p> Admission Processes:{item.item.details?.admissionProcess}</p>

          <div className="card-actions justify-end">
            <button
              onClick={() => handleOpenModal(item.item.collegeName)}
              className="bt mt-10  hover:scale-110  transition-all duration-500"
            >
              Send Review
            </button>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <ReviewModal
          collageName={collageName}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </>
  );
};

export default MyCollegeCard;
