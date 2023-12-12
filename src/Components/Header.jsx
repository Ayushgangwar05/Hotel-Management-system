import React from "react";
import Image from "../Components/Images/Headerimage.jpg";

function Header() {
  return (
    <div className="Mainheader">
      <div className="Headermain">
        <a className="Linktag" href="/">
          dribble
        </a>
        <div className="Headerdiv">
          <a href="/">Hotel Management Dashboard UI</a>
          <div className="Headersubdiv">
            <span>by</span>
            <a href="/">Dimo.ui</a>
          </div>
        </div>
        <div className="Headerimg">
          <img src={Image} alt="/" />
        </div>
      </div>
      <div className="Blankdiv"></div>
    </div>
  );
}

export default Header;
