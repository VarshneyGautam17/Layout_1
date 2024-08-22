import React from 'react';
import backimg2 from "../Images/backtwo.PNG";

function Volunter() {
  return (
    <div className='d-flex justify-content-center flex-wrap'>
        <div className="col-lg-7 col-md-6 col-sm-12">
            <img src={backimg2} alt="" className='img-fluid' />
            </div>
        <div className="col-lg-5 my-auto col-md-6 col-sm-12">
        <p
          className="pb-0 mb-0 mt-4"
          style={{ color: "#FA5A5A", fontWeight: "650", fontSize: "1.4rem" }}
        >
          Volunteer
        </p>
        <p
          style={{ borderBottom: "2px solid #FA5A5A", width: "2rem" }}
          className="m-0 p-0 mb-4"
        ></p>

        <h2 style={{ fontWeight: "700", fontSize: "2.5rem" }}>
        Be the Reason Someone 
          <br /> Smiles Today
        </h2>
        <p style={{ color: "gray" }}>
        Volunteer for the cause of transforming lives and take the opportunity to be involved at the grassroots level. Your contribution is invaluable in making a difference in the lives of those who need it most.
        </p>

        <button
          className="btn-danger btn my-2"
          style={{ borderRadius: "1.3rem" }}
        >
          Become Volunteer
        </button>
            </div>
      
    </div>
  )
}

export default Volunter
