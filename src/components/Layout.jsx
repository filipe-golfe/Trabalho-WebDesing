import React from "react";
import Contact from "./Contact";
import { Contacts } from "./Contacts";
import InputMessage from "./InputMessage";
import Messages from "./Messages";
import Profile from "./Profile";
import Search from "./Search";

export class Layout extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div id="left-panel" className="col-sm-5 col-md-4">
            <Profile />
            <Search />
            <Contacts />
          </div>
          <div id="right-panel" className="col-sm-7 col-md-8">
            <Contact />
            <Messages />
            <InputMessage />
          </div>
        </div>
      </div>
    );
  }
}
