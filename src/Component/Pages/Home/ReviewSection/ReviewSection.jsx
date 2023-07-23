import React, {useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import './Review.css'
const ReviewSection = () => {
  const [review, setReview] = useState([]);

  useEffect(() => {
    fetch(
      "https://techno-verse-college-of-innovation-server.vercel.app/reviews"
    )
      .then((res) => res.json())
      .then((data) => setReview(data));
  }, []);

  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl lg:text-5xl font-bold text-center mb-16 uppercase">
          <span className="text-pink-500"> Reviews</span> and Feedback
        </h2>

        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            {review.map((review) => (
              <SwiperSlide>
                <div
                  key={review._id}
                  className="bg-white p-6 rounded-lg shadow-lg"
                >
                  <h3 className="text-xl font-semibold mb-2">
                    {review.collegeName}
                  </h3>
                  <p className="text-gray-600 mb-4">{review.reviewText}</p>
                  <div className="flex items-center">
                    <span className="text-yellow-500 mr-1">
                      {"★".repeat(Math.round(review.rating))}
                    </span>
                    <span className="text-gray-600">{review.rating}</span>
                  </div>
                  <p className="text-gray-800 font-semibold mt-2">
                    - {review.reviewerName}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
    </section>
  );
};

export default ReviewSection;
