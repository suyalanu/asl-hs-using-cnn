import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login /Login.js";
import Home from "./Home/Home";
import About from "./Components/About";
import Howtouse from "./Components/Howtouse";
import Team from "./Components/Team";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Howtouse" element={<Howtouse />} />
          <Route path="/team" element={<Team />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
