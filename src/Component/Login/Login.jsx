import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../AuthPorvider/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import toast, { Toaster } from "react-hot-toast";

const Login = () => {

 const { SignInWithEmailPassword, SignInWithGoogle } = useContext(AuthContext);
 const location = useLocation();
 const from = location.state?.from?.pathname || "/";
 const naviget = useNavigate();
 const handleSubmit = (e) => {
   e.preventDefault();
   const form = e.target;
   const email = form.email.value;
   const password = form.password.value;
   SignInWithEmailPassword(email, password)
     .then((result) => {
       // Signed in
       toast.success("Login success ,happy shopping");
       const user = result.user;
       console.log(user);
       naviget(from, { replace: true });
       form.reset();
       // ...
     })
     .catch((error) => {
     
       const errorMessage = error.message;
       toast.error(errorMessage);
     });
 };

 useEffect(() => {
   document.title = "College |  Login"; // Set the new title here
 }, []);
  
  
  const handleSignUpWithGoogle = () => { 
    SignInWithGoogle()
      .then((result) => {
        // Signed in
        toast.success("Login success ,happy shopping");
        const user = result.user;
        console.log(user);
        naviget(from, { replace: true });
  
        // ...
      })
      .catch((error) => {
     
        const errorMessage = error.message;
        toast.error(errorMessage);
      });
  }


 


  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content">
       <Toaster></Toaster>
        <div className="card  w-full flex-shrink-0 md:w-[500px]  shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                name="email"
                required
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
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <div className='px-8 flex justify-center mb-4'>
            <button onClick={handleSignUpWithGoogle} className="btn btn-primary ">Login with google</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;