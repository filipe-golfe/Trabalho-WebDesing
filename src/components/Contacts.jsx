import React from "react";
import { getContacts } from "../api/api";

const requestUser = async () => {
  const user = await getContacts();
  return user.results[0];
};

export class Contacts extends React.Component {
  constructor() {
    super();
    this.state = { data: [] };
  }

  async componentDidMount() {
    const items = [];
    for (let i = 0; i < 20; i++) {
      let rawUser = await requestUser();
      let serializedUser = rawUser.name.first;
      items.push(serializedUser);
    }

    this.setState({ data: items });
  }

  render() {
    return (
      <div className="row">
        <div id="contatos" className="col scrul">
          {this.state.data.map(function (name, index) {
            return (
              <div
                className="col list-group-item-action d-flex align-items-center"
                key={index}
              >
                <img
                  className="img-fluid"
                  src={require("../assets/contact.png")}
                  alt="contato2"
                />
                <div className="flex-column align-items-center flex-fill m-2">
                  <h6>{name}</h6>
                  <small>Mensagem</small>
                </div>
                <small>Ontem</small>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
