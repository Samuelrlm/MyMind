import { api } from "../api";

export async function login(email, password) {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    email: `${email}`,
    password: `${password}`,
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  
    const response = await fetch(`${api}/login`, requestOptions);
    const data = await response.json();
    
    return data;
}
