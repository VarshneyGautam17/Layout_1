import React from 'react';
import "../Style/videosec.css";
import imgvideo from "../Images/Group 2962.png";

function Videosec() {
  return (
    <>
    <div className='videosec'>
        <div className='subvideoclass mx-auto'>
            <div className='subvideoclass2' >
                <img src={imgvideo} alt="image not load" className='vidicon'/>
            </div>
        </div>
    </div>
    <div className='videosec2 py-4 '>
        
        <div className="col-lg-2 col-md-4 col-sm-12 bg-white p-3 m-2" style={{borderRadius:"1.8rem"}}>
            <h1 className='text-center' style={{color:"#FA5A5A",fontWeight:"900"}}>000+</h1>
            <h6 className='text-center'>Positive Review</h6>
            <p className='text-center'>Fundraising campaign in all time</p>

            
        </div>
        <div className="col-lg-2 col-md-4 col-sm-12 bg-white p-3 m-2" style={{borderRadius:"1.8rem"}}>
            <h1 className='text-center' style={{color:"#FA5A5A",fontWeight:"900"}}>00+</h1>
            <h6 className='text-center'>Positive Review</h6>
          

            <p className='text-center'>Raised and counting donations in all time</p>
           
        </div>
        <div className="col-lg-2 col-md-4 col-sm-12 bg-white p-3 m-2" style={{borderRadius:"1.8rem"}}>
            <h1 className='text-center' style={{color:"#FA5A5A",fontWeight:"900"}}>0.0M+</h1>
            <h6 className='text-center'>Positive Review</h6>
            

           
            <p className='text-center'>Our volunteer around the world</p>
        
        </div>
        <div className="col-lg-2 col-md-4 col-sm-12 bg-white p-3 m-2" style={{borderRadius:"1.8rem"}}>
            <h1 className='text-center' style={{color:"#FA5A5A",fontWeight:"900"}}>00%</h1>
            <h6 className='text-center'>Positive Review</h6>
            

           
           
            <p className='text-center'>
            Positive review from public
            </p>
        </div>

    </div>
    </>

  )
}

export default Videosec
