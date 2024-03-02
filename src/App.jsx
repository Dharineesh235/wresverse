import Login from "./components/Login";
import "bootstrap-icons/font/bootstrap-icons.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/adminlogin" element={<Login credential="admin" />} />
        <Route path="/login" element={<Login credential="user" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
