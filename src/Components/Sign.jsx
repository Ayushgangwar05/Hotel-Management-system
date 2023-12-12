import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

function Signin() {
  return (
    <div style={{ height: "90vh" }} className="Signinpage">
      <div className="fname">
        <label style={{ marginTop: "13vh" }} htmlFor="fname">
          USER NAME
        </label>
        <br />
        <input type="text" id="fname" required />
      </div>
      <br />
      <div className="Password">
        <label htmlFor="Password">PASSWORD</label>
        <br />
        <input type="Password" id="Password" required />
      </div>
      <div className="Slider">
        <div className="SliderButton">
          <label className="switch">
            <input type="checkbox" />
            <span className="slider round"></span>
          </label>
        </div>
        <h6>Keep Me Signed IN</h6>
      </div>
      <div
        style={{
          width: "17vw",
          backgroundColor: "blue",
          marginLeft: "10vw",
          borderRadius: "20px 20px 20px 20px",
          textAlign: "center",
        }}
        className="Button123"
      >
        <Link style={{ textDecoration: "none", color: "white" }} to="/Main">
          SIGN IN
        </Link>
      </div>
      <div style={{ marginLeft: "16.6vw", marginTop: "4vh" }}>
        <Link style={{ textDecoration: "none" }} to="/Signup">
          SIGN UP
        </Link>
      </div>
      <div className="Blankdiv"></div>
      <div className="Forget">
        <a href="/">Forget your password</a>
      </div>
    </div>
  );
}

export default Signin;
