import React from "react";
import Navbar from "./Navbar";
import Header1 from "./Header1";
import Cards from "./Cards";
import Campagin from "./Campaign";
import Bookinglist from "./Bookinglist";

function UI() {
  return (
    <div className="UIDesign">
      <div className="UIDesign1">
        <div className="UINAvbar">
          <Navbar />
          <div className="UIComponents" style={{ width: "100%" }}>
            <Header1 />
            <div>
              <div style={{ display: "flex" }}>
                <Cards />
              </div>
              <Campagin />
              <div style={{ marginTop: "7vh", marginLeft: "2vw" }}>
                <Bookinglist />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="BlankdivUI"></div>
    </div>
  );
}

export default UI;
