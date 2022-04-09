import React from "react";

const Profile = () => {
  return (
    <div class="row">
    <div id="profile-row" class="col d-flex align-items-center">
      <img
        class="img-fluid mr-2 pr-2"
        src={require('../assets/contact.png')}
        alt="profile"
      />
      <label class="flex-grow-1 text-center">Nome de usuário de teste</label>
    </div>
  </div>
  );
};

export default Profile;