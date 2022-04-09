import React from "react";
import { getContacts } from "../api/api";

const requestUser = async() => {
    const user = await getContacts()
    return user.results[0];
}

// const getUser = async () => {
//     const items = [];
//     for (let i = 0; i < 1; i++) {
//       const userrrr = await requestUser();
//     //   console.log(userrrr);

//         items.push(
//         <div class="row">
//           <div class="col list-group-item-action d-flex align-items-center">
//             <img
//               class="img-fluid"
//               src={require("../assets/contact.png")}
//               alt="contato2"
//             />
//             <div class="flex-column align-items-center flex-fill m-2">
//               <h6>{userrrr.name.first}</h6>
//               <small>Mensagem</small>
//             </div>
//             <small>Ontem</small>
//           </div>
//         </div>
//       );
//     }
//     return items
// }


// const Contacts = async () => {
//     const items = await getUser();
//     console.log(items);
  
//     return (
//     <div class="row">
//       <div id="contatos" class="col scrul">
//         {items}
//       </div>
//     </div>
//   );
// };

const Contacts = async () => {
    const items = [];
    for (let i = 0; i < 2; i++) {
        let rawUser = await requestUser();
        let serializedUser = rawUser.name.first;
        items.push(serializedUser);
    }

    // console.log(items);
  
//     return (
//     <div class="row">
//       <div id="contatos" class="col scrul">
//       {items.map(function(name, index){
//         return <li key={ index }>{name}</li>;
//         })}
//       </div>
//     </div>
//   );
};

export default Contacts;
