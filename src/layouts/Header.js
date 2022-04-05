import React from 'react';
import { Route, Routes } from 'react-router-dom';
import '../styles/Header.css';

import img1 from '../images/header1.jpg';
import img2 from '../images/header2.jpg';
import img3 from '../images/header3.jpg';

const Img1 = () => {
  return <img src={img1} alt="Motor" />;
};
const Img2 = () => {
  return <img src={img2} alt="Motor" />;
};
const Img3 = () => {
  return <img src={img3} alt="Motor" />;
};

const Header = () => {
  const images = [img1, img2, img3];
  const index = Math.floor(Math.random() * 3);

  const img = images[index];
  return (
    <>
      <Routes>
        <Route path="/" element={<Img1 />}></Route>
        <Route path="/products" element={<Img2 />}></Route>
        <Route path="/contact" element={<Img3 />}></Route>
        <Route path="/admin" element={<Img3 />}></Route>
      </Routes>
    </>
  );
};

export default Header;
