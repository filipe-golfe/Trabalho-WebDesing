// import axios from "axios";

export async function getContacts() {
  const URL = 'https://randomuser.me/api/';
  const res = await fetch(URL);
  if (res.status === 200) {
    const data = await res.json();
    return data;
  } else {
    return null;
  }
}

// export async function getContacts(){
//   axios.get('https://randomuser.me/api/')
//   .then(function(response){
//     return response;
//   })
//   .catch(function(error){
//     console.log('erro na consulta:' + error)
//   })
// }