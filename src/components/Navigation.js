import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="App">
      <NavLink to="/about">О нас</NavLink>
    </div>
  );
}

export default Navigation;
