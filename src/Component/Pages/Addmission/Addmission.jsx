import React from 'react';
import Herro from '../../Shared/Herro/Herro';
import useColleges from '../../Hooks/useColleges';

const Addmission = () => {
   const { colleges, loading } = useColleges();
  return (
    <div>
      <Herro
        img={
          "https://media.istockphoto.com/id/494416552/photo/richmond-texas-city-hall.webp?s=170667a&w=0&k=20&c=2iPhIW9ZWj7N3q4rNej-m7We9U7_7JFmyVv5P6B7OY8="
        }
        titlef={"Admission"}
        titlel={"Going"}
        subtitle={`Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis
          provident labore iste sapiente, architecto distinctio dicta similique
          atque tempora pariatur corporis ipsum voluptatum quo sequi, est id
          illum fuga non.`}
        span={"On"}
      ></Herro>

      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-10 px-3">{colleges.map(item => {
          console.log(item);
          return (
            <>
              <div className="card card-side bg-base-100 shadow-xl border lg:p-10 font-serif">
                <figure>
                  <img
                    className="w-[250px] h-[200px]"
                    src={item.collegeImage}
                    alt="Movie"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="font-bold lg:text-3xl">{item.collegeName}</h2>
                  <p>
                    Rating: <span>{item.collegeRating}</span>{" "}
                  </p>
                  <p>
                    {" "}
                    Research: <span>{item.researchCount}</span>{" "}
                  </p>
                  <p> Admission Processes:{item.details?.admissionProcess}</p>
                  <div className="card-actions justify-end">
                    <button className="bt mt-10">Apply</button>
                  </div>
                </div>
              </div>
            </>
          );
        }
          
          )}</div>
      </div>
    </div>
  );
};

export default Addmission;