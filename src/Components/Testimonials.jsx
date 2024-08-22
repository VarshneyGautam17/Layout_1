import React from 'react';
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "../Style/Testimonials.css";
import { FaStar } from "react-icons/fa";
import c1 from "../Images/c-1.png"
import c2 from "../Images/c-2.png"


function Testimonials() {
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
    <div className='mt-5'>
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
          TESTIMONIALS{" "}
        </span>
      </div>
      <h2
        className="text-center mb-4 mt-3"
        style={{ fontWeight: "700" }}
      > 
        What People Say
      </h2>




      <div className="home-demo3">
     

      <OwlCarousel className="owl-theme mx-auto" {...options}>
        <div className="item ">
          <div className='px-3 pt-4'>
          <FaStar className='mx-1' style={{color:"#FA5A5A"}}/>
          <FaStar className='mx-1' style={{color:"#FA5A5A"}}/>
          <FaStar className='mx-1' style={{color:"#FA5A5A"}}/>
          <FaStar className='mx-1' style={{color:"#FA5A5A"}}/>
          <FaStar className='mx-1' style={{color:"#FA5A5A"}}/>

            
          <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.
          </p>

          </div>
          <div className="d-flex py-4 pl-3 ">
            <div className='col-3'>
                <img src={c1} alt="" />
            </div>
            <div className='col-9'>
                <h4>Arita Banson</h4>
                <h6>Delta Innovation</h6>
            </div>

          </div>
        </div>
        

        <div className="item ">
          <div className='px-3 pt-4'>
          <FaStar className='mx-1' style={{color:"#FA5A5A"}}/>
          <FaStar className='mx-1' style={{color:"#FA5A5A"}}/>
          <FaStar className='mx-1' style={{color:"#FA5A5A"}}/>
          <FaStar className='mx-1' style={{color:"#FA5A5A"}}/>
          <FaStar className='mx-1' style={{color:"#FA5A5A"}}/>

            
          <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.
          </p>

          </div>
          <div className="d-flex py-4 pl-3 ">
            <div className='col-3'>
                <img src={c2} alt="" />
            </div>
            <div className='col-9'>
                <h4>Banson Doe</h4>
                <h6>Delta Innovation</h6>
            </div>

          </div>
        </div>


        <div className="item ">
          <div className='px-3 pt-4'>
          <FaStar className='mx-1' style={{color:"#FA5A5A"}}/>
          <FaStar className='mx-1' style={{color:"#FA5A5A"}}/>
          <FaStar className='mx-1' style={{color:"#FA5A5A"}}/>
          <FaStar className='mx-1' style={{color:"#FA5A5A"}}/>
          <FaStar className='mx-1' style={{color:"#FA5A5A"}}/>

            
          <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.
          </p>

          </div>
          <div className="d-flex py-4 pl-3 ">
            <div className='col-3'>
                <img src={c1} alt="" />
            </div>
            <div className='col-9'>
                <h4>Arita Banson</h4>
                <h6>Delta Innovation</h6>
            </div>

          </div>
        </div>
       
        <div className="item ">
          <div className='px-3 pt-4'>
          <FaStar className='mx-1' style={{color:"#FA5A5A"}}/>
          <FaStar className='mx-1' style={{color:"#FA5A5A"}}/>
          <FaStar className='mx-1' style={{color:"#FA5A5A"}}/>
          <FaStar className='mx-1' style={{color:"#FA5A5A"}}/>
          <FaStar className='mx-1' style={{color:"#FA5A5A"}}/>

            
          <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.
          </p>

          </div>
          <div className="d-flex py-4 pl-3 ">
            <div className='col-3'>
                <img src={c1} alt="" />
            </div>
            <div className='col-9'>
                <h4>Arita Banson</h4>
                <h6>Delta Innovation</h6>
            </div>

          </div>
        </div>
        

        <div className="item ">
          <div className='px-3 pt-4'>
          <FaStar className='mx-1' style={{color:"#FA5A5A"}}/>
          <FaStar className='mx-1' style={{color:"#FA5A5A"}}/>
          <FaStar className='mx-1' style={{color:"#FA5A5A"}}/>
          <FaStar className='mx-1' style={{color:"#FA5A5A"}}/>
          <FaStar className='mx-1' style={{color:"#FA5A5A"}}/>

            
          <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.
          </p>

          </div>
          <div className="d-flex py-4 pl-3 ">
            <div className='col-3'>
                <img src={c2} alt="" />
            </div>
            <div className='col-9'>
                <h4>Banson Doe</h4>
                <h6>Delta Innovation</h6>
            </div>

          </div>
        </div>


        <div className="item ">
          <div className='px-3 pt-4'>
          <FaStar className='mx-1' style={{color:"#FA5A5A"}}/>
          <FaStar className='mx-1' style={{color:"#FA5A5A"}}/>
          <FaStar className='mx-1' style={{color:"#FA5A5A"}}/>
          <FaStar className='mx-1' style={{color:"#FA5A5A"}}/>
          <FaStar className='mx-1' style={{color:"#FA5A5A"}}/>

            
          <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.
          </p>

          </div>
          <div className="d-flex py-4 pl-3 ">
            <div className='col-3'>
                <img src={c1} alt="" />
            </div>
            <div className='col-9'>
                <h4>Arita Banson</h4>
                <h6>Delta Innovation</h6>
            </div>

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
  )
}

export default Testimonials
