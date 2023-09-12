import { URL } from "../api";

export default function loginAuth({ email, password }) {
    const myHeaders = new Headers();
   
    try {
      const requestBody = JSON.stringify({
            email: email,
            password: password,
      });

      const requestOptions = {
         method: "POST",
            headers: myHeaders,
         body: requestBody,
      };

      return new Promise(async (resolve, reject) => {
         await fetch(
            `http://localhost:3030/login`,
            requestOptions
         )
            .then(async (response) => {
               const resp = await response.json();

               console.log(resp);

               if (Boolean(resp?.error)) {
                  reject(resp?.error);
               }
               resolve(resp);
            })
            .catch((error) => {
               reject(error);
            });
      });
   } catch (err) {
      throw err;
   }
}