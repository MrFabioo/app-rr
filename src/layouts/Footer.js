import React from 'react';
import { Route, Routes } from 'react-router-dom';

const Footer = () => {
  return (
    <div>
      <h2>Stopka</h2>
      <Routes>
        <Route
          path="/"
          render={(props) => {
            console.log(props);
            return <p>Dodatkowe informacje</p>;
          }}
        ></Route>
      </Routes>
    </div>
  );
};

export default Footer;
