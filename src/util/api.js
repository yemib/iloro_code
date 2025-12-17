

import axios from "axios";

import { createContext, useState } from 'react';
import { useNavigate } from "react-router-dom";

import Swal from 'sweetalert2';



export const AuthContext = createContext();

const API_URL = "http://127.0.0.1:8000/api"  ;  
const APPNAME = process.env.APPNAME || "CENTERNUT";

 
const api = axios.create({
  baseURL: API_URL,
  headers: { 
    
    "Content-Type": "application/json"

  
  },
});


// Add Axios interceptor to include token in headers
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);



export const AuthProvider = ({ children }) => {
 

  const [token, setToken] = useState(localStorage.getItem("token"));

  
  const [verified, setVerified] = useState(localStorage.getItem('verified'));
  
  let check_user = localStorage.getItem("user");
  let check_doctor  =  localStorage.getItem("doctor");

  const [User, setUser] = useState((check_user != null && check_user != "undefined") ? JSON.parse(localStorage.getItem("user")) : null);
  const [Doctor, setDoctor] = useState((check_doctor != null && check_doctor != "undefined") ? JSON.parse(localStorage.getItem("doctor")) : null);
 
  const router = useNavigate();
  //alert(JSON.stringify(token)); 

  const login = (token, user) => {
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user));
    setToken(token); // 🔁 Trigger re-render
    setUser(user);
  };


    const doctorFunction = (doctor  , user) => {
     localStorage.setItem("doctor", JSON.stringify(doctor));
     localStorage.setItem("user", JSON.stringify(user));
     setDoctor(doctor);
     setUser(user);

  };

  


  const kycchange = (user) => {
    localStorage.setItem("user", JSON.stringify(user));
    // 🔁 Trigger re-render
    setUser(user);
  };

  const changeverify = (verify) => {
    localStorage.setItem("verified", verify);
    setVerified(verify);
  };
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("verified");
    setToken(null);
    setUser(null);
    setVerified(null);
    router("/login");
    //logout from server as well  
    // axios.post(`${API_URL}/logout`, { token: token })
  };

  const checkauthentication = () => {

    const token = localStorage.getItem("token");
    if (!token || token == "undefined" || token == "null") {
      /* router("login"); */
    }
  }



  return (
    <AuthContext.Provider value={{ token, User,Doctor ,  doctorFunction  , login, logout, kycchange, checkauthentication,  changeverify  }}>

      {children}

    </AuthContext.Provider>
  )

};





export function showAlert(status = "success", title = "Success!", message = "Operation completed successfully."  , timer = 5000) {
  // Determine icon and default title based on status
  const icons = {
    success: "success",
    error: "error",
    warning: "warning",
    info: "info",
    question: "question"
  };

  const defaultTitles = {
    success: "Success!",
    error: "Error!",
    warning: "Warning!",
    info: "Info",
    question: "Confirm"
  };

  Swal.fire({
    icon: icons[status] || "info",
    title: title || defaultTitles[status],
    text: message,
    showConfirmButton: false,
    timer: timer,
    timerProgressBar: true,
  });
}






export default api;
export { API_URL  , APPNAME}; 

