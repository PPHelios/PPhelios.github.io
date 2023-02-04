import axios from "axios";
import { useCartStore } from "../../store/store";
import Cookies from "universal-cookie";
const cookies = new Cookies();

export default function useAuthenticate() {
  const login = useCartStore((state) => state.login);
const logout = useCartStore((state) => state.logout);
// const loggedin = useCartStore((state) => state.loggedIn);
//  console.log(loggedin)
function signup(  formData ) {

  // set configurations
  const email = formData.email;
  const password = formData.password;

  const configuration = {
    method: "post",
    url: "http://localhost:8000/register",
    data: {
      email,
      password,
    },
  };
 // make the API call
  axios(configuration)
  .then((result) => {
    // setRegister(true);
    alert("new user added successfully")
  })
  .catch((error) => {
    error = new Error();
  });
}

function authLogin(  formData ) {
  // set configurations
  const email = formData.email;
  const password = formData.password;

  const configuration = {
    method: "post",
    url: "http://localhost:8000/login",
    data: {
      email,
      password,
    },
  };
  // make the API call
  axios(configuration)
  .then((result) => {
  alert("logged in successfully")
   // set the cookie
   cookies.set("TOKEN", result.data.token, {
    path: "/",
  });
// change store login state
 login();
  
  })
  .catch((error) => {
    error = new Error();
  });

}

const userLogout = () => { 

    // destroy the cookie
    cookies.remove("TOKEN", { path: "/" });
    // redirect user to the landing page
    // window.location.href = "/";
    alert("logged out successfully")
  logout()
 }

return {signup, authLogin, userLogout}

}
 

  


 