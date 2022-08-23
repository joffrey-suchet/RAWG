import { useState } from "react";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <div className="header">
      <Link to={"/home"} style={{ textDecoration: "none" }}>
        <h1>RAWG</h1>
      </Link>

      <input
        type="text"
        onChange={(event) => {
          props.setInput(event.target.value);
        }}
      />
      <div>
        <Link to={"/home/signin"}>
          <h2>SIGN IN</h2>
        </Link>

        <Link to={"/home/signup"}>
          <h2>SIGN UP</h2>
        </Link>
      </div>
    </div>
  );
};
export default Header;
