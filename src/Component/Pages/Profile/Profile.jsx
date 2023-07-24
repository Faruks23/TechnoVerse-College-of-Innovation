import { React, useContext, useState } from "react";
import { AuthContext } from "../../AuthPorvider/AuthProvider";
import './Profile.css'



import { FiEdit } from "react-icons/fi";
import Modal from "./Modal/Modal";
const Profile = () => {

  const { user } = useContext(AuthContext)
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="container mx-auto w-full bg-slate-300 mt-10 p-10">
      <div className="profile-container flex justify-center">
        <div className="profile">
          <div className="covers w-full lg:h-[100px] bg-slate-100 shadow-2xl p-10 border">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
            facere iusto accusamus suscipit veritatis quae et magnam facilis,
            voluptatum eaque! Alias omnis nihil incidunt quaerat nostrum ut
            reiciendis, sit soluta.
          </div>
          <div className="flex justify-center mt-6">
            <img className=" rounded-full" src={user?.photoURL} alt="" />
          </div>
          <div className="info font-bold font-serif mt-10 relative">
            <div
              onClick={handleOpenModal}
              className="edit absolute right-2 -top-12 cursor-pointer w-8 h-8 z-10"
            >
              <FiEdit className="w-8 h-8"></FiEdit>
            </div>
            {isModalOpen && <Modal onClose={handleCloseModal} />}
            <p className="font-bold">
              Name: <span>{user?.displayName}</span>
            </p>
            <p>Email:{user?.email}</p>
            <p>university:{user?.email}</p>
            <p>Address:{user?.email}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;