//const API_URL = "http://localhost:5000";
const API_URL = "https://eva-composant-logiciel-back.vercel.app";

export async function getMessage() {
  const res = await fetch(API_URL + "/");
  return res.json();
}
