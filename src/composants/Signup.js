import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleSignup = async (event) => {
    try {
      event.preventDefault();
      setErrorMessage("");
      if (username && email && password) {
        if (password === confirmPassword) {
          const response = await axios.post(
            "http://localhost:3006/home/signup",
            {
              email: email,
              username: username,
              password: password,
            }
          );
          if (response.status === 200) {
            console.log("compte créer: ", response.data);
            alert("accout create welcome");
            navigate("/home");
          }
        } else {
          setErrorMessage("passwords must be the same");
        }
      } else {
        setErrorMessage("missing parameter");
      }
    } catch (error) {
      console.log("catch of signup request =>", error.response.data);
      if (error.response.status === 409) {
        setErrorMessage("this email already has an account");
      }
    }
  };
  return (
    <div className="signupPage">
      <form className="container" onSubmit={handleSignup}>
        <div className="form">
          <h3>Sign up</h3>
          <div>
            <p>Your email:</p>
            <input
              type="email"
              placeholder="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div>
            <p>Your name:</p>
            <input
              type="username"
              placeholder="username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
          </div>
          <div>
            <p>Your password:</p>
            <input
              type="password"
              placeholder="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <div>
            <p>Confirm password:</p>
            <input
              type="password"
              placeholder="confirm your password"
              value={confirmPassword}
              onChange={(event) => setConfirmPassword(event.target.value)}
            />
          </div>
          <p className="errorMessage">{errorMessage}</p>
          <input className="submit" type="submit" value={"Sign up"} />
        </div>
      </form>
    </div>
  );
};
export default Signup;
