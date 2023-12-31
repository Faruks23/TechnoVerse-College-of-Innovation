import React, { useContext } from "react";
import { AuthContext } from "../../../AuthPorvider/AuthProvider";

const Modal = ({ onClose, handleSubmit }) => {
  

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
      <div className="bg-white rounded-lg p-8 z-10">
        <h2 className="text-2xl font-semibold mb-4">Modal Form</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full border rounded-md px-4 py-2"
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full border rounded-md px-4 py-2"
            />
          </div>
          <div>
            <label htmlFor="university">University</label>
            <input
              type="text"
              id="university"
              name="university"
              className="w-full border rounded-md px-4 py-2"
            />
          </div>
          <div>
            <label htmlFor="address">Address</label>
            <textarea
              id="address"
              name="address"
              className="w-full border rounded-md px-4 py-2"
            ></textarea>
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-300 hover:bg-gray-400 rounded-md px-4 py-2"
            >
              Close
            </button>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white rounded-md px-4 py-2 ml-4"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
