import React, { useState } from "react";

const Admin = ({ funk }) => {
  const PASSKEY = import.meta.env.VITE_PASSKEY || "admin";
  const [passkey, setPassKey] = useState("");
  const [passkeyAlert, setPasskeyAlert] = useState(false);

  const handleAdminLogin = () => {
    if (passkey === PASSKEY) funk(true);
    else setPasskeyAlert(true);
  };
  return (
    <div style={{}}>
      <div
        style={{
          fontSize: "2.5em",
          fontWeight: "900",
          color: "blue",
          padding: "25px 0px",
        }}
      >
        Admin's Login
      </div>
      <p>As administrator you will have special permissions</p>
      <p>To access them enter the PASS KEY</p>
      <input
        type="password"
        style={{
          backgroundColor: "transparent",
          padding: "10px",
          border: "2px solid blue",
          color: "white",
          fontSize: "1.3em",
          outline: "none",
        }}
        autoFocus
        placeholder="PASS KEY"
        onChange={(e) => {setPassKey(e.target.value);setPasskeyAlert(false)}}
        onKeyDown={(e) => {
          if (e.key === "Enter") handleAdminLogin();
        }}
      />
      {passkeyAlert && <div className="passkey-alert" style={{position:'absolute', left:'45%', fontSize:'1.4em'}}>*Wrong Pass key</div>}
      <div className="mt-5">
        <button
          className="btn btn-primary"
          style={{
            width: "100px",
            color: "white",
            fontSize: "1.2em",
            fontWeight: "500",
          }}
          onClick={handleAdminLogin}
        >
          Admin
        </button>
      </div>
    </div>
  );
};

export default Admin;
