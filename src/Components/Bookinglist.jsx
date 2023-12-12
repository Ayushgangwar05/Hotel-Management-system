import React from "react";

function Bookinglist() {
  return (
    <div className="Bookingmain">
      <div className="Bookinglist">
        <div className="Bookinglistlink">
          <a href="/">Booking list</a>
        </div>
        <div className="Bookinglistdot">
          <a href="/">
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
          </a>
        </div>
      </div>
      <div className="name1222 ">
        <h1 style={{ fontSize: "18px", marginTop: ".5vh" }}>1</h1>
        <i class="bi bi-person-circle"></i>
        <h4 style={{ fontSize: "16px" }}>Jordy Astaws</h4>
        <h6 style={{ marginTop: ".1vh", color: "rgba(0, 0, 0, 0.432)" }}>
          082378740
        </h6>
        <h6 style={{ color: "rgba(0, 0, 0, 0.432)" }}>Double</h6>
        <h6 color="rgba(0, 0, 0, 0.432)">01/10/12</h6>
        <h6 style={{ color: "rgba(0, 0, 0, 0.432)" }}>02/10/21</h6>
        <div className="dotback">
          <h6 style={{ color: "white", marginLeft: "1vw" }}>Paid</h6>
        </div>
      </div>
      <div className="name1222 ">
        <h1 style={{ fontSize: "18px", marginTop: ".5vh" }}>1</h1>
        <i class="bi bi-person-circle"></i>
        <h4 style={{ fontSize: "16px" }}>Alisaoon</h4>
        <h6
          style={{
            marginTop: ".1vh",
            color: "rgba(0, 0, 0, 0.432)",
            marginLeft: "2vw",
          }}
        >
          082479009
        </h6>
        <h6 style={{ color: "rgba(0, 0, 0, 0.432)" }}>Double</h6>
        <h6 color="rgba(0, 0, 0, 0.432)">28/10/12</h6>
        <h6 style={{ color: "rgba(0, 0, 0, 0.432)" }}>01/10/21</h6>
        <div className="dotback">
          <h6 style={{ color: "white", marginLeft: "1vw" }}>Paid</h6>
        </div>
      </div>
    </div>
  );
}

export default Bookinglist;
