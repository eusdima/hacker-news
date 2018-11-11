import React from "react";
import { NavLink } from "react-router-dom";

const Button = ({ className, to, text }) => (
  <NavLink className={className} to={to}>
    {text}
  </NavLink>
);

export default Button;
