import React from 'react';

const Herro = ({img,titlef,titlel,subtitle,span}) => {
  return (
    <div className="w-full h-[500px] relative mb-[100px] border">
      <img className=" blur-sm w-full h-full" src={img} alt="" />

      <div className=" w-full  absolute top-40 z-50 flex flex-col justify-center items-center">
        <h1 className="text-2xl lg:text-5xl uppercase font-bold mb-5 text-white">
          {titlef} <span className="text-pink-500"> { titlel} </span>
          {span}
        </h1>
        <p className="text-center font-serif lg:w-[500px] text-white">
          {subtitle}
        </p>
      </div>
    </div>
  );
};

export default Herro;