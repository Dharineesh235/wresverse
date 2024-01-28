import React from "react";

const Nav = () => {
  const style = {
    nav: {
      position: "fixed",
      backgroundColor: "black",
      width: "100%",
      color: "white",
      padding: "10px 40px",
      minWidth: "600px",
    },
    navLeft:{
        display: "flex",
        justifyContent: "start",
        gap: "100px",
        fontSize: "1.5em",
      },
    navRight:{
        display: "flex",
        justifyContent: "end",
        gap: "30px",
        fontSize: "1.5em",
      }
  };
  return (
    <nav style={style.nav}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div
          style={style.navLeft}
        >
          <div>Home</div>
          <div>Ofice</div>
          <div>zumba</div>
        </div>
        <div
          style={style.navRight}
        >
          <div>Login</div>
          <div>Sign Up</div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
