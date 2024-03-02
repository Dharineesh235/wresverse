import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>Home</div>
      <div onClick={()=>navigate('/adminlogin')}>admin</div>
      <div onClick={()=>navigate('/login')}>user</div>
    </>
  );
};

export default Home;
