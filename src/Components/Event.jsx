import React from "react";
import vecimg from "../Images/SaaS Modern.png";
import "../Style/event.css";
import { FaRegClock } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
function Event() {
  return (
    <div className="my-5">
      <div className="subvector">
        <h3
          className="text-center pt-5"
          style={{ fontWeight: "700", color: "white", fontSize: "2rem" }}
        >
            <span style={{borderBottom:"2px solid white"}}>
          Our
            </span> Upcomming{" "}
          <span style={{ color: "#FA5A5A", fontWeight: "700" }}>Events</span>{" "}
        </h3>
      </div>
      <div className="d-flex flex-wrap justify-content-center subvector1 ">
        <div className="col-lg-3 col-md-6 col-sm-12 p-2 mx-2 ">
          <div
            className="border bg-white"
            style={{
              borderRadius: "0.5rem",
              marginTop: "-10rem",
              boxShadow: "2px 2px 10px rgba(0,0,0,0.25)",
            }}
          >
            <img src={vecimg} alt="" className="img-fluid" />
            <h5 className="px-2">Lorem Ipsum has been</h5>
            <p className="px-2">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum is simply dummy Lorem Ipsum is simply dummy
            </p>

            <div className="d-flex  justify-content-between px-3 py-2">
              <span>
                <FaRegClock style={{ color: "#FA5A5A" }} />
                &nbsp;08:00 am - 05:00 pm
              </span>
              <span>
                <IoLocationOutline style={{ color: "#FA5A5A" }} />
                &nbsp;Noida
              </span>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 col-sm-12 bg-white p-2 mx-2">
          <div
            className="border bg-white"
            style={{
              borderRadius: "0.5rem",
              marginTop: "-15rem",
              boxShadow: "2px 2px 10px rgba(0,0,0,0.25)",
            }}
          >
            <img src={vecimg} alt="" className="img-fluid" />
            <h5 className="px-2">Lorem Ipsum has been</h5>
            <p className="px-2">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum is simply dummy Lorem Ipsum is simply dummy
            </p>
            <div className="d-flex  justify-content-between px-3 py-2">
              <span>
                <FaRegClock style={{ color: "#FA5A5A" }} />
                &nbsp;08:00 am - 05:00 pm
              </span>
              <span>
                <IoLocationOutline style={{ color: "#FA5A5A" }} />
                &nbsp;Noida
              </span>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 bg-white p-2 mx-2">
          <div
            className="border bg-white"
            style={{
              borderRadius: "0.5rem",
              marginTop: "-10rem",
              boxShadow: "2px 2px 10px rgba(0,0,0,0.25)",
            }}
          >
            <img src={vecimg} alt="" className="img-fluid" />
            <h5 className="px-2">Lorem Ipsum has been</h5>
            <p className="px-2">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum is simply dummy Lorem Ipsum is simply dummy
            </p>
            <div className="d-flex  justify-content-between px-3 py-2">
              <span>
                <FaRegClock style={{ color: "#FA5A5A" }} />
                &nbsp;08:00 am - 05:00 pm
              </span>
              <span>
                <IoLocationOutline style={{ color: "#FA5A5A" }} />
                &nbsp;Noida
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Event;
