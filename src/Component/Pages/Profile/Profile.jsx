import { React, useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthPorvider/AuthProvider";
import "./Profile.css";

import { FiEdit } from "react-icons/fi";
import Modal from "./Modal/Modal";
const Profile = () => {
  const { user, UpdateUser } = useContext(AuthContext);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  const [updateProfile, setUpdateProfile] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const university = form.university.value;
    const address = form.address.value;


    const users = { name, email, university, address };

    UpdateUser(name)
      .then((result) => {
        console.log(result);
        fetch(`http://localhost:5000/UpdateUsers/${user?.email}`, {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(users),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.matchedCount > 0) {
         
                fetch(`http://localhost:5000/getUser/${user?.email}`)
                  .then((res) => res.json())
                  .then((data) => {
                    console.log(data, "da");
                    setUpdateProfile(data);
                  });
             

              alert("updated completely");

              handleCloseModal()
            }
            console.log(data);
          });
      })

      .catch((err) => {
        console.log(err);
      });
    console.log("Success");
  };

useEffect(() => { 
fetch(
  `https://techno-verse-college-of-innovation-server.vercel.app/getUser/${user?.email}`
)
  .then((res) => res.json())
  .then((data) => {
    console.log(data, "da");
    setUpdateProfile(data);
  });

}, [user])
  

  console.log(updateProfile, "profile updated");
  const { name, emailes, university, address } = updateProfile;

  return (
    <div className="container mx-auto w-full bg-slate-300 mt-10 p-10">
      <div className="profile-container flex justify-center">
        <div className="profile">
          <div className="covers w-full lg:h-[100px] bg-slate-100  p-10 border text-white">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus
            architecto corporis totam illum eaque doloribus obcaecati quis
            veritatis rerum. Facilis nostrum debitis eligendi quidem at sapiente
            aperiam! Aspernatur, cumque rerum.
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
            {isModalOpen && (
              <Modal handleSubmit={handleSubmit} onClose={handleCloseModal} />
            )}
            <p className="font-bold">
              Name: <span>{name}</span>
            </p>
            <p>Email:{emailes}</p>
            <p>university:{university}</p>
            <p>Address:{address}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
