import Toast from "react-native-toast-message";
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
    
    if(response.status === 200) {
      Toast.show({
        type: "success",
        text1: "Sucesso",
        text2: "Login realizado com sucesso",
        position: "top",
        visibilityTime: 4000,
        autoHide: true,
        bottomOffset: 40,
      });
    } else {
      Toast.show({
        type: "error",
        text1: "Erro",
        text2: data.message,
        position: "top",
        visibilityTime: 4000,
        autoHide: true,
        bottomOffset: 40,
      });
    }

    return data;
}
