import React from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {

    const { createUser } = useContext(AuthContext);
    const Navigate = useNavigate();

    useEffect(() => {
      document.title = "Asphalt |  SignUP"; // Set the new title here
    }, []);
    const handleSubmit = (e) => {
      e.preventDefault();
      const form = e.target;
      const name = form.name.value;
      const PhotoUrl = form.PhotoUrl.value;
      const email = form.email.value;
      const password = form.password.value;
      //  if (!email) {
      //    toast("please enter your email or password");
      //    return;
      //  } else if (!password) {
      //    toast("please enter your password");
      //  }
      //  if (password.length < 6) {
      //    toast("Password must be at least 6 characters");
      //    return;
      //  }

      createUser(email, password)
        .then((result) => {
          updateUser(result.user, name, PhotoUrl);
          console.log(result);
          Navigate("/");
          toast.success("Login success ,happy shopping");
          form.reset();
        })
        .catch((error) => {
          const errorMessage = error.message;
          console.log(errorMessage);
          toast.success(errorMessage);
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
    <div>
      sign
    </div>
  );
};

export default SignUp;