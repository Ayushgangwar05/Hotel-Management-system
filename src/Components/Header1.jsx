import React from "react";

function Header1() {
  return (
    <div className="Header1">
      <div className="Headersub">
        <h1
          style={{
            fontWeight: "200",
            fontSize: "30px",
            color: "rgb(101, 101, 238)",
          }}
        >
          Welcome, <span style={{ fontWeight: "700" }}>Ariana !</span>
        </h1>
        <h3
          style={{
            color: " rgb(195, 192, 192)",
            fontSize: "17px",
            width: "18vw",
          }}
        >
          Don't forget to check your activity
        </h3>
      </div>
      <div className="Headersub1">
        <div className="Headersubnotification">
          <a href="/">
            <i className="bi bi-bell"></i>
          </a>
        </div>
        <div className="Headersub2">
          <div className="Headersub3">
            <h4 style={{ color: "rgb(101, 101, 238)" }}> Anjayani abraham</h4>
            <p
              style={{
                marginLeft: "8vw",
                position: "absolute",
                marginTop: "-10px",
              }}
            >
              owner
            </p>
          </div>
          <div className="Headersub4">
            <a href="/">
              <i className="bi bi-person-circle"></i>
            </a>
          </div>
          <div className="Headersub5">
            <a href="/">
              <i className="bi bi-arrow-down-short"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header1;
