import React from "react";

const Contact = () => {
  return (
    <div className="row">
      <div id="user" className="col d-flex align-items-center">
        <img
          className="img-fluid"
          src={require("../assets/contact.png")}
          alt="user"
        />
        <div className="flex-column align-items-center m-2">
          <h6>Julia</h6>
          <small>Visto por último: Segunda-feira às 18:00</small>
        </div>
      </div>
    </div>
  );
};

export default Contact;
