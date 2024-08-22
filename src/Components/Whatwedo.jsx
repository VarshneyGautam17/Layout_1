import React from "react";
import wi1 from "../Images/wi-1.png";
import wi2 from "../Images/wi-2.png";
import wi3 from "../Images/wi-3.png";
import "../Style/whatwedo.css";

function Whatwedo() {
  return (
    <div className="d-flex flex-wrap justify-content-center align-items-center">
      <div className="col-lg-6 col-sm-12 col-md-6 con1 ">
        <div className="col-lg-6 col-md-6 col-sm-12">
          <div className="bg-white my-4 boxes">
            <div>
              <img src={wi1} alt="img not load" />
            </div>
            <h4>Feeding The Future</h4>
            <p style={{ fontSize: "0.8rem", color: "gray" }}>
              Nourishing Lives Through Nutritious Meals And Healthy Eating
              Habits
            </p>

            <div>
              <span style={{ fontWeight: "500" }}>Read More </span>
              <span
                className="btn btn-sm mx-1 py-0 px-2"
                style={{
                  borderRadius: "80%",
                  color: "red",
                  fontSize: "1rem",
                  fontWeight:"900",
                  boxShadow: "0px 0px 5px rgba(0,0,0,0.5)",
                }}
              >
                &gt;
              </span>
            </div>
          </div>
          <div className="bg-white my-4 boxes">
            <div>
              <img src={wi3} alt="img not load" />
            </div>
            <h4>Education</h4>
            <p style={{ fontSize: "0.8rem", color: "gray" }}>
              Creating Pathways to Success Through Quality Education
            </p>

            <div>
              <span style={{ fontWeight: "500" }}>Read More</span>
              <span
                className="btn btn-sm mx-1 py-0 px-2"
                style={{
                  borderRadius: "80%",
                  color: "blue",
                  fontSize: "1rem",
                  fontWeight:"900",
                  boxShadow: "0px 0px 5px rgba(0,0,0,0.5)",
                }}
              >
                &gt;
              </span>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 py-0  col-sm-12  d-flex align-items-center">
          <div className="bg-white boxes w-100">
            <div>
              <img src={wi2} alt="img not load" />
            </div>
            <h4>Skill Development</h4>
            <p style={{ fontSize: "0.8rem", color: "gray" }}>
              Imparting Real-Life Skill Development Training for Better
              Livelihood Options
            </p>

            <div>
              <span style={{ fontWeight: "500" }}>Read More</span>
              <span
                className="btn btn-sm mx-1 py-0 px-2"
                style={{
                  borderRadius: "80%",
                  color: "lightgreen",
                  fontSize: "1rem",
                  fontWeight:"900",
                  boxShadow: "0px 0px 5px rgba(0,0,0,0.5)",
                }}
              >
                &gt;
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-6 col-sm-12 col-md-6 ">
        <p
          className="pb-0 mb-0 mt-4"
          style={{ color: "#FA5A5A", fontWeight: "650", fontSize: "1.4rem" }}
        >
          What We Do ?
        </p>
        <p
          style={{ borderBottom: "2px solid #FA5A5A", width: "2rem" }}
          className="m-0 p-0 mb-4"
        ></p>

        <h2 style={{ fontWeight: "700", fontSize: "2.5rem" }}>
          Empowering Communities
          <br /> Grow Together
        </h2>
        <p style={{ color: "gray" }}>
          By addressing the critical needs in diverse sectors, we are committed
          to build an inclusive and resilient society where everyone can grow
          and succeed. Through our interventions in pressing areas like skill
          development, we foster growth for a brighter future.
        </p>

        <button
          className="btn-danger btn my-2"
          style={{ borderRadius: "1.3rem" }}
        >
          Discover More
        </button>
      </div>
    </div>
  );
}

export default Whatwedo;
