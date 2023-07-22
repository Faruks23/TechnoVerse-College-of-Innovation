import { React,useContext } from "react";
import { AuthContext } from '../../AuthPorvider/AuthProvider';

const Profile = () => {

  const {user}=useContext(AuthContext)
  return (
    <div>
      {user && <>
        <p>{ user.email}</p>
        <p>{ user.displayName}</p>
      </>}
    </div>
  );
};

export default Profile;