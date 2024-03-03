import Login from "./components/Login";
import "bootstrap-icons/font/bootstrap-icons.css";
import { HashRouter, HashRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/adminlogin" element={<Login credential="admin" />} />
        <Route path="/login" element={<Login credential="user" />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
