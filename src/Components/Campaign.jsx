import React from "react";

function Campagin() {
  return (
    <div className="Campaign">
      <div className="Campaignsub">
        <div style={{ marginLeft: "2vw" }} className="Campaignlink">
          <a href="/">Campaign Overview</a>
        </div>
        <div style={{ marginRight: "26vw" }} className="Campaignmonth">
          <select name="month" id="cars">
            <option value="0">months</option>
            <option value="1">Jan</option>
            <option value="2">Feb</option>
            <option value="3">Mar</option>
            <option value="4">Apr</option>
            <option value="4">May</option>
            <option value="4">Jun</option>
            <option value="4">July</option>
            <option value="4">Aug</option>
            <option value="4">Sep</option>
            <option value="4">Oct</option>
            <option value="4">Nov</option>
            <option value="4">Dec</option>
          </select>
        </div>
      </div>
      <div className="Campaignbooked">
        <div className="Campaignbookedblank"></div>
        <div className="Campaignbookedheading">
          <h6>Room Visited</h6>
        </div>
        <div
          style={{ backgroundColor: "blue" }}
          className="Campaignbookedblank"
        ></div>
        <div className="Campaignbookedheading">
          <h6>Room Booked</h6>
        </div>
      </div>
      <div className="Campaigngraph">
        <div style={{ marginTop: "2vh" }}>
          <h6>200</h6>
        </div>
        <div style={{ marginTop: "3vh" }}>
          <h6>150</h6>
        </div>
        <div style={{ marginTop: "3vh" }}>
          <h6>100</h6>
        </div>
        <div style={{ marginTop: "3vh" }}>
          <h6>50</h6>
        </div>
        <div style={{ marginTop: "3vh" }}>
          <h6>0</h6>
        </div>
      </div>
      <div className="Capaigngraphmonth">
        <div>
          <h6>Jan</h6>
        </div>
        <div>
          <h6>Feb</h6>
        </div>
        <div>
          <h6>Mar</h6>
        </div>
        <div>
          <h6>Apr</h6>
        </div>
        <div>
          <h6>Jun</h6>
        </div>
        <div>
          <h6>Jul</h6>
        </div>
        <div>
          <h6>Aug</h6>
        </div>
        <div>
          <h6>Sep</h6>
        </div>
        <div>
          <h6>Oct</h6>
        </div>
        <div>
          <h6>Nov</h6>
        </div>
        <div>
          <h6>Dec</h6>
        </div>
      </div>
    </div>
  );
}

export default Campagin;
