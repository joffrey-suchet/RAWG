import "./scss/App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

// import des Pages
import Home from "./pages/Home";
import Game from "./pages/Game";
// import des componsants
import Header from "./composants/Header";
function App() {
  const [input, setInput] = useState("");

  return (
    <Router>
      <Header setInput={setInput} />
      <Routes>
        <Route path="/home" element={<Home input={input} />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </Router>
  );
}

export default App;
