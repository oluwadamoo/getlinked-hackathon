import { useEffect } from 'react';
import BrightLight from './components/BrightLight';
import Navbar from './components/Navbar';
import Home from './pages/home';
import { Route, Routes } from 'react-router-dom';
import ContactUs from './pages/contact-us';
import Blank from './pages/blank';
import Register from './pages/register';
import axios from 'axios';
import { BASEURL } from './constants/api';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import Overview from './pages/overview';

function App() {

  axios.defaults.baseURL = `${BASEURL}hackathon/`;
  const maxWidth = 1512;
  const maxSmallWidth = 400;
  const percentage = 100;

  let dimensions = {
    width: window.innerWidth,
    height: window.innerHeight,
  };

  let zoom =
    dimensions.width > 620
      ? (dimensions.width * percentage) / maxWidth
      : dimensions.width <= 400
        ? (dimensions.width * percentage) / maxSmallWidth
        : 100;

  // @ts-ignore
  document.body.style.zoom = zoom + "%";
  useEffect(() => {
    let dimensions = {
      width: window.innerWidth,
      height: window.innerHeight,
    };

    function handleResize() {
      dimensions.width = window.innerWidth;
      let zoom =
        dimensions.width > 620
          ? (dimensions.width * percentage) / maxWidth
          : dimensions.width <= 400
            ? (dimensions.width * percentage) / maxSmallWidth
            : 100;

      // @ts-ignore
      document.body.style.zoom = zoom + "%";
    }
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener('resize', handleResize)
    }

  }, [])

  return (
    <div className="app overflow-x-hidden">
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      <Navbar />
      <div className='sm:mt-[200px] mt-[100px]'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/register' element={<Register />} />
          <Route path='/contact' element={<ContactUs />} />
          <Route path='/overview' element={<Overview />} />
          <Route path='*' element={<Blank />} />
        </Routes>

      </div>
      <BrightLight className='w-[100.83%] h-[836px] absolute top-[0px]' />


    </div>
  );
}

export default App;
