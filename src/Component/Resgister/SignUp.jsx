import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { AuthContext } from "../AuthPorvider/AuthProvider";
import { updateProfile } from "firebase/auth";
const SignUp = () => {
  const { CreateUser, user } = useContext(AuthContext);
  const Navigate = useNavigate();

  useEffect(() => {
    document.title = "college |  SignUP"; // Set the new title here
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const PhotoUrl = form.PhotoUrl.value;
    const email = form.email.value;
    const password = form.password.value;
    if(!email) {
      toast("please enter your email or password");
      return;
    } else if (!password) {
      toast("please enter your password");
    }
    if (password.length < 6) {
      toast("Password must be at least 6 characters");
      return;
    }

    CreateUser(email, password)
      .then((result) => {
        updateUser(result.user, name, PhotoUrl);
        console.log(result);
        Navigate("/");
        toast.success("Login success ,happy shopping");
        form.reset();
        
          const users={name,email,}

           if (result.user) {
             fetch(
               "https://techno-verse-college-of-innovation-server.vercel.app/users",
               {
                 method: "POST",
                 headers: {
                   "content-type": "application/json",
                 },
                 body: JSON.stringify(users),
               }
             )
               .then((res) => res.json())
               .then((data) => {
                 if (data.insertedId) {
                   alert("updated completely");
                 }
                 console.log(data);
               });
           }
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
        toast.error(errorMessage);
        // ..
      });
  };
 const updateUser = (cruent, Name, photoURL) => {
   updateProfile(cruent, {
     displayName: Name,
     photoURL: photoURL,
   });
 };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content">
       <Toaster></Toaster>
        <div className="card  w-full flex-shrink-0 md:w-[500px]  shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="email"
                name="name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                name="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                placeholder="password"
                name="password"
                className="input input-bordered"
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo Url</span>
              </label>
              <input
                type="text"
                placeholder="email"
                name="PhotoUrl"
                className="input input-bordered"
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Sign Up</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
