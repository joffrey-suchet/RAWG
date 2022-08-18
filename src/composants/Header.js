import { useState } from "react";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <div className="header">
      <h1>RAWG</h1>
      <input
        type="text"
        onChange={(event) => {
          props.setInput(event.target.value);
        }}
      />
      <div>
        <h2>LOG IN</h2>
        <h2>SIGN UP</h2>
      </div>
    </div>
  );
};
export default Header;
