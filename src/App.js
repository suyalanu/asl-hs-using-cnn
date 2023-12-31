import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login /Login.js";
import Home from "./Home/Home";
import About from "./Components/About";
import Howtouse from "./Components/Howtouse";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
<<<<<<< HEAD
          <Route path="/Home" element={<Home />} />
=======
          <Route path="/home" element={<Home />} />
>>>>>>> akshar
          <Route path="/About" element={<About />} />
          <Route path="/Howtouse" element={<Howtouse />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
