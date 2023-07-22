import React from 'react';

import { MagnifyingGlass } from "react-loader-spinner";
const Loader = () => {
  return (
    <div className='flex justify-center items-center w-full h-[100vh]'>
      <MagnifyingGlass
        visible={true}
        height="100"
        width="100"
        ariaLabel="MagnifyingGlass-loading"
        wrapperStyle={{}}
        wrapperClass="MagnifyingGlass-wrapper"
        glassColor="#c0efff"
        color="#e15b64"
      />
    </div>
  );
};

export default Loader;