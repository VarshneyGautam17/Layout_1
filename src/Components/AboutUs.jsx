import React from 'react'
import mainimg2 from "../Images/Group 3114.png"

function AboutUs() {
  return (
    <div className='d-flex justify-content-center align-items-center flex-wrap mt-5'>
        <div className='col-lg-6 col-md-6 col-sm-12 m-0'>
            <p className='pb-0 mb-0 mt-4' style={{color:"#FA5A5A",fontWeight:"650",fontSize:"1.4rem"}}>About Us</p>
            <p style={{borderBottom:"2px solid #FA5A5A",width:"2rem"}} className='m-0 p-0 mb-4'></p>
            <h2 style={{fontWeight: "700", fontSize: "2.5rem"}}>Together Today For A <br/> Better Tomorrow</h2>
            <p style={{color:"gray"}}>Zipaworld Foundation is a not-for-profit organization that empowers communities through capacity building of marginalized and underserved people. Through our comprehensive support programs in Education, Healthcare, Livelihood, among others, we strive to create an environment where everyone has the opportunity to thrive</p>
            <button
                className="btn-danger btn my-2"
                style={{ borderRadius: "1.3rem" }}
              >
                Discover More
              </button>
        </div>
        <div className='col-lg-6 col-md-6 col-sm-12'>
<img src={mainimg2} alt="" className='img-fluid' />
        </div>
    </div>
  )
}

export default AboutUs
