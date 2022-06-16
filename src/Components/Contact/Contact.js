import React from "react";
import "./Contact.css";
const Contact = () => {
  return (
    <div className="background-side">
      <div className="main-container">
        <div className="row contact-second ">
          <div className="col-sm-7 contact-info">
                <h2>Get Everything You Need For Creating wordPress Websites</h2>
                <img src="" alt="" />
                <p>All-in-one Multifunctional Subscribe Service Perfect for Launching All Kinds of WordPress Projects!</p>
            </div>
          <div className="col-sm-5 contact-input">
                <h3>SUBSCRIBE AND GET YOUR BONUS!</h3>
                <input type="text" placeholder="Email address" /><br /><br />
                <input type="text" placeholder="First Name" /><br /><br />
                <input type="text" placeholder="Last Name" /><br /><br />
                <input type="text" placeholder="Address" /><br /><br />
                <button>STAY UPDATED</button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
