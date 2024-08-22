import React from 'react';
import backthree from "../Images/backthree.PNG";
import Accordion from 'react-bootstrap/Accordion';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../Style/faq.css";
function Faqs() {
  return (
    <div className='d-flex justify-content-center align-items-center flex-wrap my-5'>
        <div className='col-lg-6 col-md-6 col-sm-12 m-0'>
            <p className='pb-0 mb-0 mt-4' style={{color:"#FA5A5A",fontWeight:"650",fontSize:"1.4rem"}}>Our FAQ Now</p>
            <p style={{borderBottom:"2px solid #FA5A5A",width:"2rem"}} className='m-0 p-0 mb-4'></p>
            <h2 style={{fontWeight: "700", fontSize: "2.5rem"}}>There’s Donation Of Center
             <br/> Can Do Question</h2>
            <p style={{color:"gray"}}>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</p>

            <Accordion defaultActiveKey="1" flush>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Inspire Raised Why is it important ?</Accordion.Header>
        <Accordion.Body>
        There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Start a Fundraiser for Yourself ?</Accordion.Header>
        <Accordion.Body>
        There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Inspire Raised Why is it important ?</Accordion.Header>
        <Accordion.Body>
        There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>Inspire Raised Why is it important ?</Accordion.Header>
        <Accordion.Body>
        There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>Inspire Raised Why is it important ?</Accordion.Header>
        <Accordion.Body>
        There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5">
        <Accordion.Header>Inspire Raised Why is it important ?</Accordion.Header>
        <Accordion.Body>
        There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
           
        </div>
        <div className='col-lg-6 col-md-6 col-sm-12'>
<img src={backthree} alt="" className='img-fluid' />
        </div>
    </div>
  )
}

export default Faqs
