import React, { useContext, useState } from "react";
import { AuthContext } from "../../../AuthPorvider/AuthProvider";

const ReviewModal = ({ isOpen, onClose, collageName }) => {

  const {user}=useContext(AuthContext)
  const [ratings, setRating] = useState(5);

  const handleRatingChange = (e) => {
    setRating(parseInt(e.target.value, 10));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const reviewText = form.review.value;
       const fullReview = {
         reviewText,
         collegeName: collageName,
         rating:ratings,
         reviewerName: user?.displayName,
       }; 
    fetch(
      "https://techno-verse-college-of-innovation-server.vercel.app/AddReview",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(fullReview),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        alert('Review completed successfully')
        console.log(data);
      });


    onClose();
  };
  // console.log(rating);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div
        className="absolute inset-0 bg-gray-900 opacity-75"
        onClick={onClose}
      ></div>
      <div className="z-10 bg-white p-6 rounded-md shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4">{ collageName}</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="review"
            >
              Review
            </label>
            <textarea
              className="resize-none w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
              id="review"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="rating"
            >
              Rating
            </label>
            <select
              className="w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
              id="rating"
              value={ratings}
              onChange={handleRatingChange}
              required
            >
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
            </select>
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              className="mr-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none focus:ring focus:border-blue-300"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
            >
              Submit Review
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReviewModal;
