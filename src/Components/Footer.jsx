import React from 'react';
import { GrLocation } from "react-icons/gr";
import { FaRegEnvelope } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";
import { IoPaperPlaneOutline } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
function Footer() {
  return (
    <div className='mt-5 pt-5'>
        <div className='d-flex justify-content-center flex-wrap'>
            <div className="col-lg-4 col-md-6 col-sm-12 d-flex px-4 py-3" style={{backgroundColor:"#FA5A5A",borderRight:"1px solid white"}}>
                <div className='col-2 bg-white p-2 d-flex justify-content-center' style={{borderRadius:"0.5rem"}}>
                <GrLocation style={{fontSize:"1.8rem",color:"#FA5A5A"}}/>
                </div>
                <div className='col-10 '>
                    <p className='p-0 m-0 text-white' style={{fontWeight:'700'}}>Location:</p>
                    <p className='p-0 m-0 text-white'>Lorem ipsum dolor sit.</p>
                </div>

            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 d-flex px-4 py-3" style={{backgroundColor:"#FA5A5A",borderRight:"1px solid white"}}>
                <div className='col-2 bg-white p-2 d-flex justify-content-center' style={{borderRadius:"0.5rem"}}>
                <FaRegEnvelope style={{fontSize:"1.8rem",color:"#FA5A5A"}}/>
                </div>
                <div className='col-10 '>
                    <p className='p-0 m-0 text-white'>Email us:</p>
                    <p className='p-0 m-0 text-white' style={{fontWeight:'700'}}>Lorem ips@gmail.com.</p>
                </div>

            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 d-flex px-4 py-3" style={{backgroundColor:"#FA5A5A"}}>
                <div className='col-2 bg-white p-2 d-flex justify-content-center' style={{borderRadius:"0.5rem"}}>
                <IoCallOutline style={{fontSize:"1.8rem",color:"#FA5A5A"}}/>
                </div>
                <div className='col-10 '>
                    <p className='p-0 m-0 text-white'>Call us on:</p>
                    <p className='p-0 m-0 text-white' style={{fontWeight:'700'}}>0000000000</p>
                </div>

            </div>
           
            
        </div>
        <div className='footer d-flex justify-content-center bg-light flex-wrap'>
            <div className="col-lg-3 col-md-6 col-sm-12">
            <h3 className='m-5' style={{display:"inline-block"}}>

<span className='ml-4' style={{fontWeight:"700",color:"navy"}}>
 <i>
 LOGO
 </i>
 </span>
 </h3>
 <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates dolorum enim accusamus deserunt tempore.</p>


            </div>
            <div className="col-lg-3 col-md-6 col-sm-12   d-flex justify-content-center p-4">
                <div>
                <h5>Useful Links</h5>
                <p>FAQ</p>
                <p>About Us</p>
                <p>Blog</p>
                <p>Gallery</p>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12  d-flex justify-content-center p-4">
                <div>
                <h5>Pages</h5>
                <p>Event</p>
                <p>Get Involved</p>
                <p>Causes</p>
                <p>Volunteer</p>
                <p>Donation</p>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12  d-flex justify-content-center p-4">
                <div>
                <h5>Newsletter</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, repudiandae.</p>
                <div className="input-group mb-3">
  <input
    type="text"
    className="form-control"
    placeholder="Enter your email address"
    aria-label="Recipient's username"
    aria-describedby="basic-addon2"
  />
  <div className="input-group-append">
    <span className="input-group-text bg-danger text-white" id="basic-addon2">
     <IoPaperPlaneOutline />
    </span>
  </div>
</div>

                <div className='d-flex '>
                    <div className='p-1 m-1' style={{borderRadius:"50%",backgroundColor:"#FA5A5A"}}>
                        <FaFacebookF className='text-white' />
                    </div>
                    <div className='p-1 m-1' style={{borderRadius:"50%",backgroundColor:"#FA5A5A"}}>
                        <FaTwitter className='text-white' />
                    </div>
                    <div className='p-1 m-1' style={{borderRadius:"50%",backgroundColor:"#FA5A5A"}}>
                        <FaInstagram className='text-white' />
                    </div>
                    <div className='p-1 m-1' style={{borderRadius:"50%",backgroundColor:"#FA5A5A"}}>
                        <FaLinkedinIn className='text-white' />
                    </div>

                </div>
                </div>
                
            </div>
            
            
           
        </div>
        <div className='d-flex justify-content-between bg-light flex-wrap'>
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <p>Copyright © 2024. All right reserved.</p>
                </div>
                <div className="col-lg-6 col-md-6 text-end col-sm-12">
                    <span className='mx-2'>Privacy Policy</span>
                    <span className='mx-2'>Terms and Conditions</span>
                </div>

            </div>
    </div>
  )
}

export default Footer
