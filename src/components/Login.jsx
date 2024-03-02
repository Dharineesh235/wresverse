import React, { useEffect, useState } from "react";
import Admin from "./Admin";
import Nav from "./Nav";
import { useNavigate, useNavigation } from "react-router-dom";

const Login = ({ credential }) => {
  const PASSKEY = import.meta.env.VITE_PASSKEY || "admin";
  const [userId, setUserId] = useState("");
  const [passowrd, setPassword] = useState("");
  const [adminLogin, setAdminLogin] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    console.log(adminLogin);
  }, [adminLogin]);

  const handleSwitchFieldInput = (e) => {
    const key = e.key;
    console.log(key);
    if (key === "ArrowDown" || key === "Enter")
      if (userId.length) document.getElementById("passwordLogin").focus();
      else {
        const userIdInput = document.getElementById("userIdLogin");
        userIdInput.setAttribute("placeholder", "*UserId should not be empty");
        userIdInput.setAttribute("class", "red-placeholder");
      }
  };
  const handleSwitchFieldPassword = (e) => {
    const key = e.key;
    if (key === "ArrowUp") {
      const userIdField = document.getElementById("userIdLogin");
      userIdField.focus();
    }
    if (key === "Enter") console.log(key);
  };

  return (
    <>
      <Nav credential={credential} />
      <div
        className={
          credential !== "admin"
            ? "containerPrime containerPrimeUser"
            : "containerPrime containerPrimeAdmin"
        }
        // style={
        //   credential === "admin"
        //     ? style.containerPrimeAdmin
        //     : style.containerPrimeUser
        // }
      >
        <div
          className="containerSec"
          // style={
          //   credential !== "admin"
          //     ? style.containerSec
          //     : style.containerSecAdmin
          // }
        >
          <div className="mt-5">
            <h1>Login</h1>
          </div>

          {/* user id input container */}
          <div className="container-input">
            <div>
              <i
                className={
                  credential === "admin"
                    ? "bi  bi-person-fill Dg text-light icon"
                    : "bi  bi-person-fill Dg icon"
                }
              ></i>
            </div>
            <div>
              <input
                id="userIdLogin"
                style={{
                  backgroundColor: "transparent",
                  border: "none",
                  borderBottom: "3px solid rgb(132, 22, 2)",
                  padding: "5px",
                  color: "white",
                  fontWeight: "500",
                  outline: "none",
                  fontSize: "1.5em",
                }}
                type="text"
                className="login-input"
                placeholder="Enter user id..."
                onChange={(e) => setUserId(e.target.value)}
                onKeyDown={handleSwitchFieldInput}
                autoFocus
              />
            </div>
          </div>
          
          {/* login password container  */}
          <div className="container-input">
            <div>
              <i
                className={
                  credential === "admin"
                    ? "bi bi-lock-fill text-light icon"
                    : "bi bi-lock-fill icon"
                }
              ></i>
            </div>
            <div style={{ position: "relative" }}>
              <input
                id="passwordLogin"
                style={{
                  backgroundColor: "transparent",
                  border: "none",
                  borderBottom: "3px solid rgb(132, 22, 2)",
                  padding: "5px",
                  color: "white",
                  fontWeight: "500",
                  outline: "none",
                  fontSize: "1.5em",
                }}
                type="password"
                className='login-input login-admin'
                placeholder="Enter passowrd..."
                onChange={(e) => setPassword(e.target.value)}
                onKeyDown={handleSwitchFieldPassword}
              />
            </div>
          </div>

          {/* user Options */}
          <div
            className="container-user-opts"
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "300px",
              margin: "0 auto",
            }}
          >
            {credential!=="admin" ? <p
              className="forgot-pass-login"
              style={{
                paddingTop: "20px",
                cursor: "pointer",
                fontSize: "1.1em",
                fontWeight:"700"
              }}
              onClick={()=>navigate('/adminlogin')}
            >
              Admin?
            </p> :
            <p
            className="forgot-pass-login"
            style={{
              paddingTop: "20px",
              cursor: "pointer",
              fontSize: "1.1em",
              fontWeight:"700"
            }}
            onClick={()=>navigate('/login')}
          >
            User?
          </p>}
            <p
              className="forgot-pass-login"
              style={{
                paddingTop: "20px",
                cursor: "pointer",
                fontSize: "1.1em",
                fontWeight:"700"
              }}
            >
              Forgot password ?
            </p>
          </div>

          <div className="mt-5 mb-5 ">
            {credential !== "admin" ? (
              <button className="submit-btn submit-btn-user" >
                Submit
              </button>
            ) : (
              <button className="submit-btn submit-btn-admin">
                Submit
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
