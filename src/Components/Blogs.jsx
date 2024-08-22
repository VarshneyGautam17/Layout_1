import React from 'react';
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import b1 from "../Images/b-1.png"
import b2 from "../Images/b-2.png"
import b3 from "../Images/b-3.png"
import "../Style/blog.css";
import { FaRegComments } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";
import { ImArrowUpRight2 } from "react-icons/im";
function Blogs() {
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
    <div>
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
          BLOG & NEWS{" "}
        </span>
      </div>
      <h2
        className="text-center mb-4 mt-3"
        style={{ fontWeight: "700" }}
      >
         Latest Blog & News
      </h2>




      <div className="home-demo2">
     

      <OwlCarousel className="owl-theme mx-auto" {...options}>
        <div className="item ">
          <img src={b1} alt="image not load" className="img-fluid" />
          <div className='px-3 pt-4'>

            <p className='pb-3' style={{color:"gray"}}>

            <SlCalender style={{color:"#FA5A5A"}} />
            &nbsp;&nbsp;08 may, 2023&nbsp;&nbsp;|&nbsp;&nbsp;<FaRegComments style={{color:"#FA5A5A",fontSize:"1.2rem"}} />&nbsp;&nbsp;3 Comments
            </p>
          <h5>Lorem Ipsum has been the industry's standard dummy</h5>
          <p>
          Protecting your home from damaging leaks is 
          essential to maintaining the integrity
          </p>

          </div>
          <div className="d-flex py-4 pl-3 ">
           <span style={{color:"#FA5A5A",fontWeight:"600"}}>Read More <ImArrowUpRight2 className='pt-1'  style={{color:"#FA5A5A",fontWeight:"900"}}/> </span>
          </div>
        </div>
        <div className="item " style={{backgroundColor:"#FA5A5A"}}>
          <img src={b2} alt="image not load" className="img-fluid" />
          <div className='px-3 pt-4'>

            <p className='pb-3' style={{color:"white"}}>

            <SlCalender style={{color:"white"}} />
            &nbsp;&nbsp;08 may, 2023&nbsp;&nbsp;|&nbsp;&nbsp;<FaRegComments style={{color:"white",fontSize:"1.2rem"}} />&nbsp;&nbsp;3 Comments
            </p>
          <h5 style={{color:"white"}}>Lorem Ipsum has been the industry's standard dummy</h5>
          <p style={{color:"white"}}>
          Protecting your home from damaging leaks is 
          essential to maintaining the integrity
          </p>

          </div>
          <div className="d-flex py-4 pl-3 ">
           <span style={{color:"white",fontWeight:"600"}}>Read More <ImArrowUpRight2 className='pt-1'  style={{color:"white",fontWeight:"900"}}/> </span>
          </div>
        </div>
        <div className="item ">
          <img src={b3} alt="image not load" className="img-fluid" />
          <div className='px-3 pt-4'>

            <p className='pb-3' style={{color:"gray"}}>

            <SlCalender style={{color:"#FA5A5A"}} />
            &nbsp;&nbsp;08 may, 2023&nbsp;&nbsp;|&nbsp;&nbsp;<FaRegComments style={{color:"#FA5A5A",fontSize:"1.2rem"}} />&nbsp;&nbsp;3 Comments
            </p>
          <h5>Lorem Ipsum has been the industry's standard dummy</h5>
          <p>
          Protecting your home from damaging leaks is 
          essential to maintaining the integrity
          </p>

          </div>
          <div className="d-flex py-4 pl-3 ">
           <span style={{color:"#FA5A5A",fontWeight:"600"}}>Read More <ImArrowUpRight2 className='pt-1'  style={{color:"#FA5A5A",fontWeight:"900"}}/> </span>
          </div>
        </div>


        <div className="item ">
          <img src={b1} alt="image not load" className="img-fluid" />
          <div className='px-3 pt-4'>

            <p className='pb-3' style={{color:"gray"}}>

            <SlCalender style={{color:"#FA5A5A"}} />
            &nbsp;&nbsp;08 may, 2023&nbsp;&nbsp;|&nbsp;&nbsp;<FaRegComments style={{color:"#FA5A5A",fontSize:"1.2rem"}} />&nbsp;&nbsp;3 Comments
            </p>
          <h5>Lorem Ipsum has been the industry's standard dummy</h5>
          <p>
          Protecting your home from damaging leaks is 
          essential to maintaining the integrity
          </p>

          </div>
          <div className="d-flex py-4 pl-3 ">
           <span style={{color:"#FA5A5A",fontWeight:"600"}}>Read More <ImArrowUpRight2 className='pt-1'  style={{color:"#FA5A5A",fontWeight:"900"}}/> </span>
          </div>
        </div>
        <div className="item " style={{backgroundColor:"#FA5A5A"}}>
          <img src={b2} alt="image not load" className="img-fluid" />
          <div className='px-3 pt-4'>

            <p className='pb-3' style={{color:"white"}}>

            <SlCalender style={{color:"white"}} />
            &nbsp;&nbsp;08 may, 2023&nbsp;&nbsp;|&nbsp;&nbsp;<FaRegComments style={{color:"white",fontSize:"1.2rem"}} />&nbsp;&nbsp;3 Comments
            </p>
          <h5 style={{color:"white"}}>Lorem Ipsum has been the industry's standard dummy</h5>
          <p style={{color:"white"}}>
          Protecting your home from damaging leaks is 
          essential to maintaining the integrity
          </p>

          </div>
          <div className="d-flex py-4 pl-3 ">
           <span style={{color:"white",fontWeight:"600"}}>Read More <ImArrowUpRight2 className='pt-1'  style={{color:"white",fontWeight:"900"}}/> </span>
          </div>
        </div>
        <div className="item ">
          <img src={b3} alt="image not load" className="img-fluid" />
          <div className='px-3 pt-4'>

            <p className='pb-3' style={{color:"gray"}}>

            <SlCalender style={{color:"#FA5A5A"}} />
            &nbsp;&nbsp;08 may, 2023&nbsp;&nbsp;|&nbsp;&nbsp;<FaRegComments style={{color:"#FA5A5A",fontSize:"1.2rem"}} />&nbsp;&nbsp;3 Comments
            </p>
          <h5>Lorem Ipsum has been the industry's standard dummy</h5>
          <p>
          Protecting your home from damaging leaks is 
          essential to maintaining the integrity
          </p>

          </div>
          <div className="d-flex py-4 pl-3 ">
           <span style={{color:"#FA5A5A",fontWeight:"600"}}>Read More <ImArrowUpRight2 className='pt-1'  style={{color:"#FA5A5A",fontWeight:"900"}}/> </span>
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

export default Blogs
