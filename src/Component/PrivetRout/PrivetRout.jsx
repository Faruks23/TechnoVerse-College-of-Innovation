import React, { useContext } from 'react';
import { AuthContext } from '../AuthPorvider/AuthProvider';
import Loader from '../Loader/Loader';
import { Navigate, useLocation } from 'react-router-dom';

const PrivetRout = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location=useLocation()
  if (loading) {
    return <Loader></Loader>;
  }
  if (user) {
    return children;
  }

   

  return <Navigate state={{ from: location }} to={"/login"}></Navigate>;
};

export default PrivetRout;