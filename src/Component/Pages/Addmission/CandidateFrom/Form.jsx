import React, { useContext, useRef, useState } from 'react';
import { AuthContext } from '../../../AuthPorvider/AuthProvider';
const img_hosting_key = import.meta.env.VITE_IMG_KEY;
import { useParams } from 'react-router-dom'
import toast, { Toaster } from "react-hot-toast";
const Form = () => {
  const {collageName}=useParams()
const { user } = useContext(AuthContext);
const img_hosting_Url = `https://api.imgbb.com/1/upload?key=${img_hosting_key}`;
const fileInputRef = useRef(null);
const [loader, setLoader] = useState();
  

  const handleSubmit = (e) => {
         setLoader(true);
      e.preventDefault();
      const form = e.target;
      const candidateName = form.candidateName.value;
      const Subject = form.Subject.value;
      const CandidateEmail = form.CandidateEmail.value;
      const CandidatePhone = form.CandidatePhone.value;
      const Address = form.Address.value;
      const DateOfBirth=form.DateOfBirth.value;
      const Image = fileInputRef.current.files[0];

      console.log({
        candidateName,
        Subject,
        CandidateEmail,
        CandidatePhone,
        Address,
        DateOfBirth,

      });
    
    const fromData = new FormData();
    fromData.append("image", Image)
     fetch(img_hosting_Url, {
       method: "POST",
       body:fromData,
     })
       .then((res) => res.json())
       .then((img) => {
         console.log("image",img);
         if (img.success) {
           let img_url = img.data.display_url;
           console.log(img_url);

           const Applied = {
             candidateName,
             collageName,
             Subject,
             CandidateEmail,
             CandidatePhone,
             Address,
             DateOfBirth,
             img_url,
           };
           fetch(`http://localhost:5000/admissionsForm`,{
             method: "POST",
             headers: {
               "content-type": "application/json",
             },
             body: JSON.stringify(Applied),
           })
             .then((res) => res.json())
             .then((data) => {
               if (data.insertedId) {
                 setLoader(false);
                 toast.success("Class has been inserted successfully");
               }
               console.log(data);
             });
         }

         //  console.log(img,Class)
       });
    
    
    
    
    };



  return (
    <>
      <Toaster></Toaster>
      <div className="absolute z-50 top-0 w-full h-[100vh]  flex justify-center items-center">
        <form
          onSubmit={handleSubmit}
          className="w-full relative h-[100vh] mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <p className="w-10 h-10 absolute top-0 right-0"> X</p>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="candidateName"
            >
              Candidate Name
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="candidateName"
              id="candidateName"
              placeholder="Enter candidate name"
            />
          </div>
          {/* subject */}
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="candidateName"
          >
            Candidate Name:
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="Subject"
            id="candidateName"
            placeholder="Enter candidate name"
          />

          {/* candidate email */}
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="candidateName"
          >
            Candidate Email:
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="CandidateEmail"
            id="CandidateEmail "
            placeholder="Enter candidate name"
          />

          {/* candidate phone */}
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="candidateName"
          >
            Phone:
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="CandidatePhone"
            id="CandidatePhone "
            placeholder="Enter candidate name"
          />

          {/* address */}
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="candidateName"
          >
            Address:
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="Address"
            id="Address"
            placeholder="Enter candidate name"
          />
          {/* Date of birth */}

          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="candidateName"
          >
            Date of birth:
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="DateOfBirth"
            id="Candidate Email "
            placeholder="Enter candidate name"
          />

          {/* Add other input fields similarly for subject, email, phone, address, date of birth, and image */}
          {/* Subject */}
          {/* Candidate Email */}
          {/* Candidate Phone */}
          {/* Address */}
          {/* Date of Birth */}
          {/* Image Upload */}

          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="image"
            >
              Image Upload
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="file"
              name="image"
              ref={fileInputRef}
              id="image"
              accept="image/*"
            />
          </div>
          <div className="flex items-center justify-center">
            <button
              className=" bt bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              {loader ? (
                <>
                  <p>Loading...</p>
                </>
              ) : (
                <> Submit</>
              )}
            </button>
          </div>
        </form>
      </div>
    </>
  );}


export default Form;