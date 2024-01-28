import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Login from "./components/Login";
import Nav from "./components/Nav";
import "bootstrap-icons/font/bootstrap-icons.css";

function App() {

  return (
    <>
      <Nav />
      <Login credential="admin"/>
    </>
  );
}

export default App;
