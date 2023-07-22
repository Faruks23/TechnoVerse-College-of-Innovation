import { useState } from 'react'
import Header from './Component/Header/Header'
import {Outlet} from 'react-router-dom'
import Footer from './Component/Footer/Footer';

function App() {


  return (
    <>
      <div className="header">
        <Header></Header>
      </div>
      <div className="main min-h-[calc(100vh-60px)]">
        <Outlet />
      </div>
      <div className="footer">
        <Footer></Footer>
      </div>
    </>
  );
}

export default App
