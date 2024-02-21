import React from "react";
import { useNavigate } from "react-router-dom";

const Nav = ({credential}) => {

  const navigate = useNavigate();
  const style = {
    nav: {
      position: "fixed",
      backgroundColor: "black",
      width: "100%",
      color: "white",
      padding: "10px 40px",
      minWidth: "600px",
      top:"0px"
    },
    navAdmin:{
      position: "fixed",
      backgroundColor: "brown",
      width: "100%",
      color: "white",
      padding: "12px 10px",
      minWidth: "600px",
      top:"0px",
    },
    navLeft:{
        display: "flex",
        justifyContent: "start",
        gap: "30px",
        fontSize: "1.2em",
      },
    navRight:{
        display: "flex",
        justifyContent: "end",
        gap: "30px",
        fontSize: "1.2em",
      }
  };
  return (
    <nav style={credential!=='admin' ?style.nav : style.navAdmin}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div
          style={style.navLeft}
        >
          <div onClick={()=>navigate('/')}>Home</div>
          <div>office</div>
          <div>zumba</div>
        </div>
        <div
          style={style.navRight}
        >
          <div href='/adminlogin'>Login</div>
          <div>Sign Up</div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
