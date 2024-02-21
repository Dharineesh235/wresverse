import React, { useEffect, useState } from "react";
import Admin from "./Admin";
import Nav from "./Nav";

const Login = ({ credential }) => {
  const PASSKEY = import.meta.env.VITE_PASSKEY || "admin";
  const [userId, setUserId] = useState("");
  const [passowrd, setPassword] = useState("");
  const [adminLogin, setAdminLogin] = useState(false);

  useEffect(() => {
    console.log(adminLogin);
  }, [adminLogin]);

  const style = {
    containerPrimeUser: {
      minWidth: "600px",
      backgroundColor: "grey",
      height: "100vh",
    },
    containerPrimeAdmin: {
      minWidth: "600px",
      backgroundColor: "black",
      height: "100vh",
    },
    containerSec: {
      position: "relative",
      marginTop: "150px",
      width: "500px",
      maxWidth: "500px",
      margin: "0 auto",
      border: "10px solid black",
      borderRadius: "20px",
      boxSizing: "border-box",
      minWidth: "500px",
    },
    containerSecAdmin: {
      position: "relative",
      marginTop: "150px",
      maxWidth: "500px",
      margin: "0 auto",
      border: "10px solid red",
      borderRadius: "20px",
      boxSizing: "border-box",
      minWidth: "550px",
    },
    gap: { gap: "20px" },
    input: {
      backgroundColor: "transparent",
      border: "none",
      borderBottom: "3px solid rgb(132, 22, 2)",
      padding: "5px",
      // color: "rgb(8, 8, 8)",
      color: "white",
      fontWeight: "500",
      outline: "none",
      fontSize: "1.5em",
    },
    submitBtn: {
      position: "relative",
      backgroundColor: "black",
      border: "none",
      fontSize: "1.2em",
      color: "#FFFFFF",
      padding: "12px",
      width: "80%",
      textAlign: "center",
      transitionDuration: "0.4s",
      overflow: "hidden",
      cursor: "pointer",
      borderRadius: "26px",
    },
    submitBtnadmin: {
      position: "relative",
      backgroundColor: "red",
      border: "none",
      fontSize: "1.2em",
      color: "#FFFFFF",
      padding: "12px",
      width: "80%",
      textAlign: "center",
      transitionDuration: "0.4s",
      overflow: "hidden",
      cursor: "pointer",
      borderRadius: "26px",
    },
  };

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
    <div
      className={credential !== "admin" ? "login" : "login-admin"}
      style={
        credential === "admin"
          ? style.containerPrimeAdmin
          : style.containerPrimeUser
      }
    >
      {credential !== "admin" ? (
        <>
          <Nav credential={credential}/>
          <div
            className="login-container"
            style={
              credential !== "admin"
                ? style.containerSec
                : style.containerSecAdmin
            }
          >
            <div className="mt-5">
              <h1>Login</h1>
            </div>

            <div
              className="mt-5 d-flex justify-content-center"
              style={style.gap}
            >
              <div>
                <i
                  className={
                    credential === "admin"
                      ? "bi fs-3 bi-person-fill Dg text-light"
                      : "bi fs-3 bi-person-fill Dg"
                  }
                ></i>
              </div>
              <div>
                <input
                  id="userIdLogin"
                  style={style.input}
                  type="text"
                  className="login-input"
                  placeholder="Enter user id..."
                  onChange={(e) => setUserId(e.target.value)}
                  onKeyDown={handleSwitchFieldInput}
                  autoFocus
                />
              </div>
            </div>

            <div
              className="mt-5 d-flex justify-content-center"
              style={style.gap}
            >
              <div>
                <i
                  className={
                    credential === "admin"
                      ? "bi fs-3 bi-lock-fill text-light"
                      : "bi fs-3 bi-lock-fill"
                  }
                ></i>
              </div>
              <div style={{ position: "relative" }}>
                <input
                  id="passwordLogin"
                  style={style.input}
                  type="password"
                  className={
                    credential === "admin"
                      ? "login-input login-admin"
                      : "login-input"
                  }
                  placeholder="Enter passowrd..."
                  onChange={(e) => setPassword(e.target.value)}
                  onKeyDown={handleSwitchFieldPassword}
                />
              </div>
            </div>
            <div>
              <p
                className="forgot-pass-login"
                style={{
                  paddingTop: "20px",
                  cursor: "pointer",
                  fontSize: "1.1em",
                  marginLeft: "250px",
                }}
              >
                Forgot password ?
              </p>
            </div>

            <div className="mt-5 mb-5">
              {credential !== "admin" ? (
                <button className="submit-btn" style={style.submitBtn}>
                  Submit
                </button>
              ) : (
                <button className="submit-btn" style={style.submitBtnadmin}>
                  Submit
                </button>
              )}
            </div>
          </div>
        </>
      ) : (
        <>
          {adminLogin !== true ? (
            <Admin funk={setAdminLogin} />
          ) : (
           <>
            <Nav credential={credential}/>
             <div
              className="login-container"
              style={
                credential !== "admin"
                  ? style.containerSec
                  : style.containerSecAdmin
              }
            >
              <div className="mt-5">
                <h1>Login</h1>
              </div>

              <div
                className="mt-5 d-flex justify-content-center"
                style={style.gap}
              >
                <div>
                  <i
                    className={
                      credential === "admin"
                        ? "bi fs-3 bi-person-fill Dg text-light"
                        : "bi fs-3 bi-person-fill Dg"
                    }
                  ></i>
                </div>
                <div>
                  <input
                    id="userIdLogin"
                    style={style.input}
                    type="text"
                    className="login-input"
                    placeholder="Enter user id..."
                    onChange={(e) => setUserId(e.target.value)}
                    onKeyDown={handleSwitchFieldInput}
                    autoFocus
                  />
                </div>
              </div>

              <div
                className="mt-5 d-flex justify-content-center"
                style={style.gap}
              >
                <div>
                  <i
                    className={
                      credential === "admin"
                        ? "bi fs-3 bi-lock-fill text-light"
                        : "bi fs-3 bi-lock-fill"
                    }
                  ></i>
                </div>
                <div style={{ position: "relative" }}>
                  <input
                    id="passwordLogin"
                    style={style.input}
                    type="password"
                    className={
                      credential === "admin"
                        ? "login-input login-admin"
                        : "login-input"
                    }
                    placeholder="Enter passowrd..."
                    onChange={(e) => setPassword(e.target.value)}
                    onKeyDown={handleSwitchFieldPassword}
                  />
                </div>
              </div>
              <div style={{display:'flex', gap:'200px', marginLeft:'50px'}}>
                <p style={{
                    paddingTop: "20px",
                    cursor: "pointer",
                    fontSize: "1.2em",
                    color:'skyblue'
                  }}>user ?</p>
                <p
                  className="forgot-pass-login"
                  style={{
                    paddingTop: "20px",
                    cursor: "pointer",
                    fontSize: "1.2em",
                    color:'skyblue'
                  
                  }}
                >
                  Forgot password ?
                </p>
              </div>
              <div>Didn't have an account ?</div>

              <div className="mt-5 mb-5">
                {credential !== "admin" ? (
                  <button className="submit-btn" style={style.submitBtn}>
                    Submit
                  </button>
                ) : (
                  <button className="submit-btn" style={style.submitBtnadmin}>
                    Submit
                  </button>
                )}
              </div>
            </div>
           </>
          )}
        </>
      )}
    </div>
  );
};

export default Login;
