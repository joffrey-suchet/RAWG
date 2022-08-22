import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate;
  return (
    <div className="signupPage">
      <form className="form">
        <input type="email" placeholder="email" />
        <input type="username" placeholder="username" value={username} />
        <input type="password" placeholder="password" value={password} />
        <input
          type="^password"
          placeholder="confirm your password"
          value={confirmPassword}
        />
      </form>
    </div>
  );
};
export default Signup;
