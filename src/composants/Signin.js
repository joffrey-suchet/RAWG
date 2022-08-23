import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleSignin = async (event) => {
    event.preventDefault();
    setErrorMessage("");
    if (email && password) {
      try {
        if (password === confirmPassword) {
          const response = await axios.post(
            "http://localhost:3006/home/signin",
            {
              email: email,
              password: password,
            }
          );

          console.log(response.data);
          if (response.data.token) {
            alert("you are login. welcome");
            navigate("/home");
          }
        } else {
          setErrorMessage("passwords must be the same");
        }
      } catch (error) {
        console.log("catch of signin =>", error.message);
        if (error.response.status === 401) {
          setErrorMessage("email or password is incorrect ");
        }
      }
    } else {
      setErrorMessage("missing parameter");
    }
  };

  return (
    <div className="signupPage">
      <form className="container" onSubmit={handleSignin}>
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
export default Signin;
