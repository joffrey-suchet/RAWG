import "./scss/App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

// import des Pages
import Home from "./pages/Home";
import Game from "./pages/Game";
import Signup from "./composants/Signup";
import Signin from "./composants/Signin";

// import des componsants
import Header from "./composants/Header";
function App() {
  const [input, setInput] = useState("");

  return (
    <Router>
      <Header setInput={setInput} />
      <Routes>
        <Route path="/home" element={<Home input={input} />} />
        <Route path="/game/:id" element={<Game />} />
        <Route path="/home/signup" element={<Signup />} />
        <Route path="/home/signin" element={<Signin />} />
      </Routes>
    </Router>
  );
}

export default App;
