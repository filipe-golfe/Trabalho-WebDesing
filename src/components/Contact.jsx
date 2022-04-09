import React from "react";

const Contact = () => {
  return (
    <div class="row">
    <div id="user" class="col d-flex align-items-center">
      <img class="img-fluid" src={require('../assets/contact.png')} alt="user" />
      <div class="flex-column align-items-center m-2">
        <h6>Julia</h6>
        <small>Visto por último: Segunda-feira às 18:00</small>
      </div>
    </div>
  </div>
  );
};

export default Contact;