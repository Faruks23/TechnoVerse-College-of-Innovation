import React from 'react';

const Gallery = () => {
  return (
    <div className="my-[100px] ">
      <h1 className="font-bold text-2xl md:text-5xl text-center uppercase">
        <span className="text-pink-500">graduate's</span> group{" "}
      </h1>

      <div className="  flex justify-center  my-[100px] mx-[10%]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6  container mx-auto">
          <img
            src="https://media.istockphoto.com/id/1370529942/photo/portrait-of-a-young-man-standing-with-his-arms-crossed-on-graduation-day.webp?b=1&s=170667a&w=0&k=20&c=9LBJB6Y4Q64pdc_yIwUuSa8Uecp1Chywmx-cEiL1Px8="
            alt=""
          />
          <img
            src="https://media.istockphoto.com/id/1349302576/photo/happy-graduate-student-holding-his-diploma-on-graduation-day.webp?b=1&s=170667a&w=0&k=20&c=Rr9c4Evpt3SU3qxVjmUvjYD8JDRomWT_DeKmSg9CuEw="
            alt=""
          />
          <img
            src="https://media.istockphoto.com/id/1366623793/photo/diverse-friends-group-takes-joyful-photo-after-graduation.webp?b=1&s=170667a&w=0&k=20&c=tN9CELWU7q3JhqxieFaxbkPZJka41JOxbF1UAY_TvtY="
            alt=""
          />
          <img className='lg:h-[100%]'
            src="https://media.istockphoto.com/id/1436453663/photo/graduation-success-and-black-man-or-students-at-university-for-study-goal-certificate.webp?b=1&s=170667a&w=0&k=20&c=Ov033WdtuBzUGwS1TdHnMEn3PNk3ogVAaH-dvaY_xSI="
            alt=""
          />
          <img
            src="https://media.istockphoto.com/id/1411479287/photo/happy-student-taking-selfie-with-her-father-on-her-graduation-day.webp?b=1&s=170667a&w=0&k=20&c=1G417jDXQ6kML1DjLboSLZFilCHEabJjM7c-ICjpQWQ="
            alt=""
          />
          <img
            src="https://media.istockphoto.com/id/1496191979/photo/young-graduates-applauding-while-celebrating-on-graduation.webp?b=1&s=170667a&w=0&k=20&c=eX7sXf_8HGq-v6IzOrtqtRmAHtw4JhuPkWGEpgI97YM="
            alt=""
          />
          <img
            src="https://media.istockphoto.com/id/1359164204/photo/cropped-portrait-of-two-attractive-young-female-students-celebrating-on-graduation-day.webp?b=1&s=170667a&w=0&k=20&c=jQIW1TjuTQ8_fkEHwv-E2YBJ5hmqbfhVMD-YJoPetos="
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;