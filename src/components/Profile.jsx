import React from "react";

const Profile = () => {
  return (
    <div className="row">
      <div id="profile-row" className="col d-flex align-items-center">
        <img
          className="img-fluid mr-2 pr-2"
          src={require("../assets/contact.png")}
          alt="profile"
        />
        <label className="flex-grow-1 text-center">
          Nome de usuário de teste
        </label>
      </div>
    </div>
  );
};

export default Profile;
