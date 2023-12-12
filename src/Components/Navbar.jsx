import React from "react";

function Navbar() {
  return (
    <div className="MainNavbar">
      <div className="Navbar">
        <div style={{ marginTop: "10px" }}>
          <a href="/">
            <i style={{ fontSize: "35px" }} className="bi bi-person-circle"></i>
          </a>
        </div>
        <div>
          <a href="/">
            <i className="bi bi-microsoft"></i>
          </a>
        </div>
        <div>
          <a href="/">
            <i className="bi bi-opencollective"></i>
          </a>
        </div>
        <div>
          <a href="/">
            <i className="bi bi-heart"></i>
          </a>
        </div>
        <div>
          <a href="/">
            <i className="bi bi-journal"></i>
          </a>
        </div>
        <div>
          <a href="/">
            <i className="bi bi-suitcase-lg"></i>
          </a>
        </div>
        <div>
          <a href="/">
            <i className="bi bi-envelope"></i>
          </a>
        </div>
        <div>
          <a href="/">
            <i className="bi bi-gear"></i>
          </a>
        </div>
      </div>
      <div style={{ marginTop: "30vh" }}>
        <a href="/">
          <i
            style={{ color: "rgba(26, 26, 26, 0.638)" }}
            className="bi bi-box-arrow-down"
          ></i>
        </a>
      </div>
    </div>
  );
}

export default Navbar;
