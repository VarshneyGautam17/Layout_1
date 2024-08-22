import React, { useEffect } from "react";
import "../Style/Carousel1.css";
import carimg from "../Images/SaaSModern.png";

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

function Carousel1() {
  const options = {
    items: 3,
    margin: 0,
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
        items: 3, 
      },
    },
  };
  return (
    <div className="home-demo">
      <h2
        className="py-5 my-4 text-center"
        style={{ fontWeight: "700", fontSize: "2.5rem", color: "black" }}
      >
        <span style={{ borderBottom: "2px solid #FA5A5A" }}>Our</span>{" "}
        <span style={{ color: "#FA5A5A" }}>Causes</span>
      </h2>

      <OwlCarousel className="owl-theme" {...options}>
        <div className="item m-2">
          <img src={carimg} alt="image not load" className="img-fluid" />
          <h2>Lorem Ipsum has been</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum is simply dumm
          </p>
          <div className="d-flex justify-content-between px-2 mt-5">
            <span style={{ fontWeight: "700", fontSize: "1.3rem" }}>
              Goals: <span style={{ color: "#FA5A5A" }}>$00000</span>
            </span>
            <span style={{ fontWeight: "700", fontSize: "1.3rem" }}>
              Raised: <span style={{ color: "#FA5A5A" }}>$0000</span>
            </span>
          </div>

          <div class="progress-bar__wrapper m-2 my-3 ">
            <label class="progress-bar__value" htmlFor="progress-bar">
              {" "}
              80%{" "}
            </label>
            <progress id="progress-bar" value="80" max="100"></progress>
          </div>
          <div className="d-flex justify-content-center">
            <button
              className="btn btn-danger m-3 w-75 border "
              style={{ borderRadius: "1rem" }}
            >
              Donate Now{" "}
            </button>
          </div>
        </div>
        <div className="item m-2">
          <img src={carimg} alt="image not load" className="img-fluid" />
          <h2>Lorem Ipsum has been</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum is simply dumm
          </p>
          <div className="d-flex justify-content-between px-2 mt-5">
            <span style={{ fontWeight: "700", fontSize: "1.3rem" }}>
              Goals: <span style={{ color: "#FA5A5A" }}>$00000</span>
            </span>
            <span style={{ fontWeight: "700", fontSize: "1.3rem" }}>
              Raised: <span style={{ color: "#FA5A5A" }}>$0000</span>
            </span>
          </div>

          <div class="progress-bar__wrapper m-2 my-3 ">
            <label class="progress-bar__value" htmlFor="progress-bar">
              {" "}
              80%{" "}
            </label>
            <progress id="progress-bar" value="80" max="100"></progress>
          </div>
          <div className="d-flex justify-content-center">
            <button
              className="btn btn-danger m-3 w-75 border "
              style={{ borderRadius: "1rem" }}
            >
              Donate Now{" "}
            </button>
          </div>
        </div>
        <div className="item m-2">
          <img src={carimg} alt="image not load" className="img-fluid" />
          <h2>Lorem Ipsum has been</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum is simply dumm
          </p>
          <div className="d-flex justify-content-between px-2 mt-5">
            <span style={{ fontWeight: "700", fontSize: "1.3rem" }}>
              Goals: <span style={{ color: "#FA5A5A" }}>$00000</span>
            </span>
            <span style={{ fontWeight: "700", fontSize: "1.3rem" }}>
              Raised: <span style={{ color: "#FA5A5A" }}>$0000</span>
            </span>
          </div>

          <div class="progress-bar__wrapper m-2 my-3 ">
            <label class="progress-bar__value" htmlFor="progress-bar">
              {" "}
              80%{" "}
            </label>
            <progress id="progress-bar" value="80" max="100"></progress>
          </div>
          <div className="d-flex justify-content-center">
            <button
              className="btn btn-danger m-3 w-75 border "
              style={{ borderRadius: "1rem" }}
            >
              Donate Now{" "}
            </button>
          </div>
        </div>
        <div className="item m-2">
          <img src={carimg} alt="image not load" className="img-fluid" />
          <h2>Lorem Ipsum has been</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum is simply dumm
          </p>
          <div className="d-flex justify-content-between px-2 mt-5">
            <span style={{ fontWeight: "700", fontSize: "1.3rem" }}>
              Goals: <span style={{ color: "#FA5A5A" }}>$00000</span>
            </span>
            <span style={{ fontWeight: "700", fontSize: "1.3rem" }}>
              Raised: <span style={{ color: "#FA5A5A" }}>$0000</span>
            </span>
          </div>

          <div class="progress-bar__wrapper m-2 my-3 ">
            <label class="progress-bar__value" htmlFor="progress-bar">
              {" "}
              80%{" "}
            </label>
            <progress id="progress-bar" value="80" max="100"></progress>
          </div>
          <div className="d-flex justify-content-center">
            <button
              className="btn btn-danger m-3 w-75 border "
              style={{ borderRadius: "1rem" }}
            >
              Donate Now{" "}
            </button>
          </div>
        </div>
        <div className="item m-2">
          <img src={carimg} alt="image not load" className="img-fluid" />
          <h2>Lorem Ipsum has been</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum is simply dumm
          </p>
          <div className="d-flex justify-content-between px-2 mt-5">
            <span style={{ fontWeight: "700", fontSize: "1.3rem" }}>
              Goals: <span style={{ color: "#FA5A5A" }}>$00000</span>
            </span>
            <span style={{ fontWeight: "700", fontSize: "1.3rem" }}>
              Raised: <span style={{ color: "#FA5A5A" }}>$0000</span>
            </span>
          </div>

          <div class="progress-bar__wrapper m-2 my-3 ">
            <label class="progress-bar__value" htmlFor="progress-bar">
              {" "}
              80%{" "}
            </label>
            <progress id="progress-bar" value="80" max="100"></progress>
          </div>
          <div className="d-flex justify-content-center">
            <button
              className="btn btn-danger m-3 w-75 border "
              style={{ borderRadius: "1rem" }}
            >
              Donate Now{" "}
            </button>
          </div>
        </div>
        <div className="item m-2">
          <img src={carimg} alt="image not load" className="img-fluid" />
          <h2>Lorem Ipsum has been</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum is simply dumm
          </p>
          <div className="d-flex justify-content-between px-2 mt-5">
            <span style={{ fontWeight: "700", fontSize: "1.3rem" }}>
              Goals: <span style={{ color: "#FA5A5A" }}>$00000</span>
            </span>
            <span style={{ fontWeight: "700", fontSize: "1.3rem" }}>
              Raised: <span style={{ color: "#FA5A5A" }}>$0000</span>
            </span>
          </div>

          <div class="progress-bar__wrapper m-2 my-3 ">
            <label class="progress-bar__value" htmlFor="progress-bar">
              {" "}
              80%{" "}
            </label>
            <progress id="progress-bar" value="80" max="100"></progress>
          </div>
          <div className="d-flex justify-content-center">
            <button
              className="btn btn-danger m-3 w-75 border "
              style={{ borderRadius: "1rem" }}
            >
              Donate Now{" "}
            </button>
          </div>
        </div>
        <div className="item m-2">
          <img src={carimg} alt="image not load" className="img-fluid" />
          <h2>Lorem Ipsum has been</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum is simply dumm
          </p>
          <div className="d-flex justify-content-between px-2 mt-5">
            <span style={{ fontWeight: "700", fontSize: "1.3rem" }}>
              Goals: <span style={{ color: "#FA5A5A" }}>$00000</span>
            </span>
            <span style={{ fontWeight: "700", fontSize: "1.3rem" }}>
              Raised: <span style={{ color: "#FA5A5A" }}>$0000</span>
            </span>
          </div>

          <div class="progress-bar__wrapper m-2 my-3 ">
            <label class="progress-bar__value" htmlFor="progress-bar">
              {" "}
              80%{" "}
            </label>
            <progress id="progress-bar" value="80" max="100"></progress>
          </div>
          <div className="d-flex justify-content-center">
            <button
              className="btn btn-danger m-3 w-75 border "
              style={{ borderRadius: "1rem" }}
            >
              Donate Now{" "}
            </button>
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
  );
}

export default Carousel1;
