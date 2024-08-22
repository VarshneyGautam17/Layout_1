import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "../Style/ourteam.css";
import t1 from "../Images/t-1.png";
import t2 from "../Images/t-2.png";
import t3 from "../Images/t-3.png";
import t4 from "../Images/t-4.png";

function OurTeam() {
  const options = {
    items: 4,
    margin: 10,
    loop: true,
    nav: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 4,
      },
    },
  };
  return (
    <div className="p-5">
      <div className="d-flex justify-content-center">
        <span>
          <p
            className="p-0 m-0 mb-1 mt-2"
            style={{ width: "1rem", border: "2px solid #FA5A5A" }}
          ></p>
          <p
            className="p-0 m-0"
            style={{ width: "2rem", border: "2px solid #FA5A5A" }}
          ></p>
        </span>
        <span className="mx-2" style={{ fontWeight: "600", color: "#FA5A5A" }}>
          OUR TEAM{" "}
        </span>
      </div>
      <h2
        className="text-center mb-4 mt-3"
        style={{ fontWeight: "700", color: "#FA5A5A" }}
      >
        TEAM
      </h2>

      <div className="home-demo1">
        <OwlCarousel className="owl-theme" {...options}>
          <div className="item my-2">
            <div className=" py-3 carimgcon">
              <div className="bg-white border" style={{ width: "16rem" }}>
                <img
                  src={t1}
                  alt="image not load"
                  className="carimgclass img-fluid"
                />
              </div>
            </div>
            <div className="pb-3" style={{ backgroundColor: "#FA5A5A" }}>
              <h6 className="text-center">Sudha Sharma</h6>
              <p className="text-center">Government Affairs</p>
            </div>
          </div>
          <div className="item my-2">
            <div className=" py-3 carimgcon">
              <div className="bg-white border" style={{ width: "16rem" }}>
                <img
                  src={t2}
                  alt="image not load"
                  className="carimgclass img-fluid"
                />
              </div>
            </div>
            <div className="pb-3" style={{ backgroundColor: "#FA5A5A" }}>
              <h6 className="text-center">Shavani Khetam</h6>
              <p className="text-center">People’s Person</p>
            </div>
          </div>
          <div className="item my-2">
            <div className=" py-3 carimgcon">
              <div className="bg-white border" style={{ width: "16rem" }}>
                <img
                  src={t3}
                  alt="image not load"
                  className="carimgclass img-fluid"
                />
              </div>
            </div>
            <div className="pb-3" style={{ backgroundColor: "#FA5A5A" }}>
              <h6 className="text-center">Alejandro Kahf</h6>
              <p className="text-center">Chief Creative Officer</p>
            </div>
          </div>
          <div className="item my-2">
            <div className=" py-3 carimgcon">
              <div className="bg-white border" style={{ width: "16rem" }}>
                <img
                  src={t4}
                  alt="image not load"
                  className="carimgclass img-fluid"
                />
              </div>
            </div>
            <div className="pb-3" style={{ backgroundColor: "#FA5A5A" }}>
              <h6 className="text-center">Deandra John</h6>
              <p className="text-center">Chief Talent Officer</p>
            </div>
          </div>
          <div className="item my-2">
            <div className=" py-3 carimgcon">
              <div className="bg-white border" style={{ width: "16rem" }}>
                <img
                  src={t1}
                  alt="image not load"
                  className="carimgclass img-fluid"
                />
              </div>
            </div>
            <div className="pb-3" style={{ backgroundColor: "#FA5A5A" }}>
              <h6 className="text-center">Sudha Sharma</h6>
              <p className="text-center">Government Affairs</p>
            </div>
          </div>
          <div className="item my-2">
            <div className=" py-3 carimgcon">
              <div className="bg-white border" style={{ width: "16rem" }}>
                <img
                  src={t2}
                  alt="image not load"
                  className="carimgclass img-fluid"
                />
              </div>
            </div>
            <div className="pb-3" style={{ backgroundColor: "#FA5A5A" }}>
              <h6 className="text-center">Shavani Khetam</h6>
              <p className="text-center">People’s Person</p>
            </div>
          </div>
          <div className="item my-2">
            <div className=" py-3 carimgcon">
              <div className="bg-white border" style={{ width: "16rem" }}>
                <img
                  src={t3}
                  alt="image not load"
                  className="carimgclass img-fluid"
                />
              </div>
            </div>
            <div className="pb-3" style={{ backgroundColor: "#FA5A5A" }}>
              <h6 className="text-center">Alejandro Kahf</h6>
              <p className="text-center">Chief Creative Officer</p>
            </div>
          </div>
          <div className="item my-2">
            <div className=" py-3 carimgcon">
              <div className="bg-white border" style={{ width: "16rem" }}>
                <img
                  src={t4}
                  alt="image not load"
                  className="carimgclass img-fluid"
                />
              </div>
            </div>
            <div className="pb-3" style={{ backgroundColor: "#FA5A5A" }}>
              <h6 className="text-center">Deandra John</h6>
              <p className="text-center">Chief Talent Officer</p>
            </div>
          </div>
          <div className="item my-2">
            <div className=" py-3 carimgcon">
              <div className="bg-white border" style={{ width: "16rem" }}>
                <img
                  src={t1}
                  alt="image not load"
                  className="carimgclass img-fluid"
                />
              </div>
            </div>
            <div className="pb-3" style={{ backgroundColor: "#FA5A5A" }}>
              <h6 className="text-center">Sudha Sharma</h6>
              <p className="text-center">Government Affairs</p>
            </div>
          </div>
          <div className="item my-2">
            <div className=" py-3 carimgcon">
              <div className="bg-white border" style={{ width: "16rem" }}>
                <img
                  src={t2}
                  alt="image not load"
                  className="carimgclass img-fluid"
                />
              </div>
            </div>
            <div className="pb-3" style={{ backgroundColor: "#FA5A5A" }}>
              <h6 className="text-center">Shavani Khetam</h6>
              <p className="text-center">People’s Person</p>
            </div>
          </div>
          <div className="item my-2">
            <div className=" py-3 carimgcon">
              <div className="bg-white border" style={{ width: "16rem" }}>
                <img
                  src={t3}
                  alt="image not load"
                  className="carimgclass img-fluid"
                />
              </div>
            </div>
            <div className="pb-3" style={{ backgroundColor: "#FA5A5A" }}>
              <h6 className="text-center">Alejandro Kahf</h6>
              <p className="text-center">Chief Creative Officer</p>
            </div>
          </div>
          <div className="item my-2">
            <div className=" py-3 carimgcon">
              <div className="bg-white border" style={{ width: "16rem" }}>
                <img
                  src={t4}
                  alt="image not load"
                  className="carimgclass img-fluid"
                />
              </div>
            </div>
            <div className="pb-3" style={{ backgroundColor: "#FA5A5A" }}>
              <h6 className="text-center">Deandra John</h6>
              <p className="text-center">Chief Talent Officer</p>
            </div>
          </div>
        </OwlCarousel>
        <div className="text-center">
          <button
            className="btn btn-danger m-3 "
            style={{ borderRadius: "1rem" }}
          >
            View All{" "}
          </button>
        </div>
      </div>
    </div>
  );
}

export default OurTeam;
