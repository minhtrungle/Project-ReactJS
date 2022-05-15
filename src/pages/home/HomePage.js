import React from "react";
import { Link } from "react-router-dom";
const HomePage = () => {
  const info = localStorage.getItem("userInfo");
  const name = info ? JSON.parse(info) : null;
  const logout = () => {
    localStorage.removeItem("userInfo");
    window.location.reload();
  };
  return (
    <div>
      <h1>Home Page</h1>
    </div>
  );
};

export default HomePage;

