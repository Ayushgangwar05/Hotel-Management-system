import React from "react";

function Cards() {
  return (
    <div style={{ height: "28vh" }} className="Cards">
      <div className="card mb-3" style={{ width: "16vw", height: "16vh" }}>
        <div className="row g-0">
          <div className="col-md-4">
            <a href="/">
              <i className="bi bi-file-earmark-spreadsheet"></i>
            </a>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Total Arrived</h5>
              <p className="card-text">231</p>
            </div>
          </div>
        </div>
      </div>
      <div className="card mb-3" style={{ width: "16vw", height: "16vh" }}>
        <div className="row g-0">
          <div className="col-md-4">
            <a href="/">
              <i className="bi bi-bookmark-fill"></i>
            </a>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Total Booked</h5>
              <p className="card-text">891</p>
            </div>
          </div>
        </div>
      </div>
      <div className="card mb-3" style={{ width: "17vw", height: "16vh" }}>
        <div className="row g-0">
          <div className="col-md-4">
            <a href="/">
              <i className="bi bi-file-check-fill"></i>
            </a>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Total Check in</h5>
              <p className="card-text">129</p>
            </div>
          </div>
        </div>
      </div>

      <div className="cardend">
        <div className="cardend1">
          <a style={{ fontWeight: "600 ", marginLeft: "1vw" }} href="/">
            Staff Schedule
          </a>
          <a
            style={{ fontWeight: "300", color: "black", marginRight: "1vw" }}
            href="/"
          >
            See all
          </a>
        </div>
        <div className="cardend2">
          <div>
            <h5 style={{ marginLeft: "1vw" }}>
              Today,
              <span style={{ fontWeight: "300" }}> 4 october</span>
            </h5>
          </div>
          <div className="cardend2leftright">
            <a href="/">
              <i class="bi bi-chevron-left"></i>
            </a>
            <a href="/">
              <i class="bi bi-chevron-right"></i>
            </a>
          </div>
        </div>
        <div className="cardendweek">
          <a href="/">Sun</a>
          <a href="/">Mon</a>
          <a href="/">Tue</a>
          <a href="/">Wed</a>
          <a href="/">Thr</a>
          <a href="/">Fri</a>
          <a href="/">Sat</a>
        </div>
        <div className="cardenddate">
          <div>
            <a href="/">1</a>
          </div>
          <div className="cardbackground">
            <a style={{ color: "white", marginLeft: ".5vw" }} href="/">
              2
            </a>
          </div>

          <div>
            <a href="/">3</a>
          </div>
          <div>
            <a style={{ marginLeft: ".1vw" }} href="/">
              4
            </a>
          </div>
          <div>
            <a style={{ marginLeft: ".1vw" }} href="/">
              5
            </a>
          </div>
          <div>
            <a style={{ marginLeft: ".1vw" }} href="/">
              6
            </a>
          </div>
          <div>
            <a style={{ marginLeft: ".1vw" }} href="/">
              7
            </a>
          </div>
        </div>
        <div className="cardendblank">
          <i class="bi bi-caret-down-fill"></i>
        </div>
        <div className="cardendoffice">
          <div className="cardendoffivebackground">
            <a href="/">Front office</a>
          </div>

          <h5>
            Today,<span> 12:32 am</span>
          </h5>
        </div>

        <a style={{ textDecoration: "none" }} href="/">
          <div className="cardendprofile">
            <div className="cardendsubprofile">
              <a href="/">
                <i class="bi bi-person-circle"></i>
              </a>
              <h6>Aris nurman</h6>
              <p>
                Completed all task{" "}
                <span style={{ color: "blue", fontWeight: "700" }}>#213</span>
              </p>
            </div>
            <div className="cardendsubprofilenamecard">
              <div className="cardendsubprofilenamecardsub">
                <h6>Machine repair</h6>
                <p>#212</p>
              </div>
              <div className="cardendsubprofilenamecardsub1">
                <i class="bi bi-check-circle-fill"></i>
                <h6>Task Completed</h6>
              </div>
            </div>
          </div>
        </a>

        <div className="cardendoffice">
          <div
            style={{ backgroundColor: "orange" }}
            className="cardendoffivebackground"
          >
            <a style={{ color: "white" }} href="/">
              Kitchen
            </a>
          </div>

          <h5>
            Today,<span> 08:35 am</span>
          </h5>
        </div>
        <a style={{ textDecoration: "none" }} href="/">
          <div className="cardendprofile">
            <div className="cardendsubprofile">
              <a href="/">
                <i class="bi bi-person-circle"></i>
              </a>
              <h6>Korun Aas</h6>
              <p>
                get new task
                <span style={{ color: "blue", fontWeight: "700" }}>#212</span>
              </p>
            </div>
            <div className="cardendsubprofilenamecard">
              <div className="cardendsubprofilenamecardsub">
                <h6>Cooking for guest</h6>
                <p style={{ marginLeft: "2vw" }}>#212</p>
              </div>
              <div
                style={{
                  backgroundColor: "orange",
                  width: "6vw",
                }}
                className="cardendsubprofilenamecardsub1"
              >
                <i
                  style={{ color: " yellow" }}
                  class="bi bi-check-circle-fill"
                ></i>
                <h6 style={{ color: " yellow" }}>New Task</h6>
              </div>
            </div>
          </div>
        </a>

        <div className="cardendoffice">
          <div
            style={{ backgroundColor: "green" }}
            className="cardendoffivebackground"
          >
            <a style={{ color: "white" }} href="/">
              Guest room
            </a>
          </div>

          <h5>
            Today,<span> 08:00 am</span>
          </h5>
        </div>
        <a style={{ textDecoration: "none" }} href="/">
          <div className="cardendprofile">
            <div className="cardendsubprofile">
              <a href="/">
                <i class="bi bi-person-circle"></i>
              </a>
              <h6>Sarah Sereh</h6>
              <p>
                get new task{" "}
                <span style={{ color: "blue", fontWeight: "700" }}>#211</span>
              </p>
            </div>
            <div className="cardendsubprofilenamecard">
              <div className="cardendsubprofilenamecardsub">
                <h6>Clean room</h6>
                <p style={{ marginLeft: "5vw" }}>#211</p>
              </div>
              <div
                style={{
                  backgroundColor: "orange",
                  width: "6vw",
                }}
                className="cardendsubprofilenamecardsub1"
              >
                <i
                  style={{ color: " yellow" }}
                  class="bi bi-check-circle-fill"
                ></i>
                <h6 style={{ color: " yellow" }}>New Task</h6>
              </div>
            </div>
          </div>
        </a>

        <div className="cardendoffice">
          <div
            style={{ backgroundColor: "green" }}
            className="cardendoffivebackground"
          >
            <a style={{ color: "white" }} href="/">
              Guest room
            </a>
          </div>

          <h5>
            Today,<span> 08:00 am</span>
          </h5>
        </div>
      </div>
    </div>
  );
}

export default Cards;
