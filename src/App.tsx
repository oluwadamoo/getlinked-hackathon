import { useEffect, useState } from 'react';
import BrightLight from './components/BrightLight';
import Navbar from './components/Navbar';
import Home from './pages/home';
import { Route, Routes } from 'react-router-dom';
import ContactUs from './pages/contact-us';
import Blank from './pages/blank';
import Register from './pages/auth';

function App() {
  const [width, setWidth] = useState(1512);

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

  function handleResize() {
    dimensions.width = window.innerWidth;
    setWidth(window.innerWidth);
    zoom =
      dimensions.width > 620
        ? (dimensions.width * percentage) / maxWidth
        : dimensions.width <= 400
          ? (dimensions.width * percentage) / maxSmallWidth
          : 100;
    // @ts-ignore
    document.body.style.zoom = zoom + "%";
  }

  // @ts-ignore
  document.body.style.zoom = zoom + "%";

  useEffect(() => {

  }, [width])
  window.addEventListener("resize", handleResize);

  return (
    <div className="app overflow-x-hidden">
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/contact' element={<ContactUs />} />
        <Route path='*' element={<Blank />} />
      </Routes>

      <BrightLight className='w-[100.83%] h-[836px] absolute top-[0px]' />


    </div>
  );
}

export default App;
