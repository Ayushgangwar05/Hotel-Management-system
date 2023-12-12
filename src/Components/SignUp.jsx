import React from "react";

function SignUp() {
  return (
    <div style={{ height: "100vh" }} className="SignUp">
      <div className="fname">
        <label style={{ marginTop: "7vh" }} htmlFor="fname">
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
      <br />
      <div className="RepeatPassword">
        <label htmlFor="Password">REPEAT PASSWORD</label>
        <br />
        <input type="Password" id="Password" required />
      </div>
      <br />
      <div className="Email">
        <label htmlFor="Email">EMAIL</label>
        <br />
        <input type="Email" id="Email" required />
      </div>
      <br />
      <br />
      <div className="Button">
        <button>SIGN UP</button>
      </div>
      <div className="Blankdiv"></div>
    </div>
  );
}

export default SignUp;
