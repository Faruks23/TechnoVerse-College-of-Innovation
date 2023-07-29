import React from 'react';
import toast, { Toaster } from "react-hot-toast";
import Banner from './Banner/Banner';
import SearchInput from '../../Header/Searchinput/Searchinput';
import CollageCard from './CollageCard/CollageCard';
import Gallery from './Gallery/Gallery';
import ResearchPapersSection from './Research/Research';
import ReviewSection from './ReviewSection/ReviewSection';
const Home = () => {

  
  return (
    <div>
      {/* banner section */}

      <div className="Banner w-full md:h-[600px] h-full relative">
        <Banner></Banner>
        <div className="search absolute top-0 z-10 w-full h-full flex flex-col justify-center items-center">
          <div className=" mt-10 md:mt-[-60px]  flex flex-col justify-center items-center">
            <h1 className="text-2xl font-bold font-serif md:text-7xl text-white text-center mb-3">
              {" "}
              We are Provide The best college services and facilities{" "}
            </h1>
            <p className="md:w-[50%] text-center text-white mb-10  text-sm md:text-[18px]  font-sans leading-0 md:leading-7">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit,
              cupiditate ipsa iusto beatae alias ipsam, explicabo at quisquam
              dignissimos animi sint magnam vitae incidunt amet, distinctio
              perspiciatis rem totam necessitatibus!
            </p>
          </div>

          <div className="se mt-[-17px] md:mt-0">
            <SearchInput></SearchInput>
          </div>
        </div>
      </div>
      {/*  colleges card */}

      <div className="collageCard my-[100px]">
        <h1 className="text-2xl md:text-5xl text-center uppercase mb-10 font-bold">
          Best <span className='text-pink-500'>Colleges</span>
        </h1>
        <CollageCard></CollageCard>
      </div>
      {/* gallery section */}
      
      <Gallery></Gallery>
      
      {/* Research section */}

      <ResearchPapersSection>

      </ResearchPapersSection>

      {/* Review section */}
      <ReviewSection></ReviewSection>

    </div>
  );
};

export default Home;