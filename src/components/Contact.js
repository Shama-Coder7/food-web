import React from "react";
import Footer from "./Footer";

function Contact() {
  return (
    <>
    <div id='contact'> <h1>BOOK YOUR TABLE</h1>

<div className="row">
    <div className="col-md-6 form-group mb-3">
      <input
        type="text"
        className="form-control"
        id="name"
        placeholder="NAME"
      />
    </div>

    <div className="col-md-6 form-group mb-3">
      <input
        type="text"
        className="form-control"
        id="email"
        placeholder="EMAIL"
      />
    </div>
</div><div className="row">
    <div className="col-md-6 form-group mb-3">
      <input
        type="text"
        className="form-control"
        id="date"
        placeholder="DATE"
      />
    </div>

    <div className="col-md-6 form-group mb-3">
      <input
        type="text"
        className="form-control"
        id="time"
        placeholder="TIME"
      />
    </div>
</div>


    <div className="row">
    <div className="col-md-6 form-group mb-3">
      <input
        type="text"
        className="form-control"
        id="people"
        placeholder="PEOPLE"
      />
    </div>

    <div className="col-md-6 form-group mb-3">
      <button className="contact-btn" style={{backgroundColor: 'red'}}>FIND A TABLE</button>
    </div>
</div>


   </div> 
   <Footer />
   </>
   
  );
}

export default Contact;
