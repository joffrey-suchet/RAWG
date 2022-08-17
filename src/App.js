import "./scss/App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import des Pages
import Home from "./pages/Home";
import Game from "./pages/Game";
// import des componsants
import Header from "./composants/Header";
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </Router>
  );
}

export default App;
