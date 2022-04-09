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
