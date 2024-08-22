import React from "react";
import mainimg1 from "../Images/Group 3117.png";
import i1 from "../Images/i-1.png";
import i2 from "../Images/i-2.png";
import i3 from "../Images/i-3.png";
import i4 from "../Images/i-4.png";
import i5 from "../Images/i-5.png";

function Maincon1() {
  return (
    <>
      <div className="d-flex flex-wrap">
        <div className="col-lg-6 col-sm-12 col-md-6 d-flex justify-content-center align-items-center">
          <div className="col-12">
            <h1
              className="fw-bolder my-4"
              style={{ fontWeight: "700", fontSize: "2.7rem" }}
            >
              Rising Together- Building Stronger Communities
            </h1>
            <p
              className="text-muted my-4"
              style={{ fontSize: "1.3rem", fontWeight: "500" }}
            >
              Committed To Uplifting Lives, Bringing <br /> Hope Into Action
            </p>
            <div className="d-flex justify-content-between col-7 pl-0 my-5">
              <button
                className="btn-danger btn my-2"
                style={{ borderRadius: "1.3rem" }}
              >
                Volunteer Now
              </button>
              <button
                className="btn-outline-danger btn my-2"
                style={{ borderRadius: "1.3rem" }}
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
        <div className=" col-lg-6 col-sm-12 col-md-6">
          <img src={mainimg1} alt="Images not load" className="img-fluid" />
        </div>
      </div>
      <div
        className="d-flex flex-wrap justify-content-center border"
        style={{ backgroundColor: "#fa5a5a5f" }}
      >
        <div className="m-3 my-4 bg-white p-3 d-flex flex-wrap justify-content-center" style={{borderRadius:"1.1rem"}}>
          <div className="col-4">
            <img src={i1} alt="icon not load" />
          </div>

          <div className="col-8">
            <span style={{fontWeight:"600"}}>
              Brighter <br />
              Tomorrow
            </span>
          </div>
        </div>
        <div className="m-3 my-4 bg-white p-3 d-flex flex-wrap justify-content-center" style={{borderRadius:"1.1rem"}}>
          <div className="col-4">
            <img src={i2} alt="icon not load" />
          </div>

          <div className="col-8">
            <span style={{fontWeight:"600"}}>
            Volunteer <br />
            Today
            </span>
          </div>
        </div>
        <div className="m-3 my-4 bg-white p-3 d-flex flex-wrap justify-content-center" style={{borderRadius:"1.1rem"}}>
          <div className="col-4">
            <img src={i3} alt="icon not load" />
          </div>

          <div className="col-8">
            <span style={{fontWeight:"600"}}>
            Impactful
             <br />
             Giving
            </span>
          </div>
        </div>
        <div className="m-3 my-4 bg-white p-3 d-flex flex-wrap justify-content-center" style={{borderRadius:"1.1rem"}}>
          <div className="col-4">
            <img src={i4} alt="icon not load" />
          </div>

          <div className="col-8">
            <span style={{fontWeight:"600"}}>
            Love in
             <br />
             Action
            </span>
          </div>
        </div>
        <div className="m-3 my-4 bg-white p-3 d-flex flex-wrap justify-content-center" style={{borderRadius:"1.1rem"}}>
          <div className="col-4">
            <img src={i5} alt="icon not load" />
          </div>

          <div className="col-8">
            <span style={{fontWeight:"600"}}>
            Compassion
             <br />
             Collective
            </span>
          </div>
        </div>
        
      </div>
    </>
  );
}

export default Maincon1;
