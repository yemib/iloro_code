/* eslint-disable no-unused-vars */


import { useState, useContext, useEffect } from "react";

import axios from "axios";
import { API_URL, showAlert, AuthContext } from "../util/api";
import { Link, useNavigate } from "react-router-dom";
 import './form_style.css'; 
import RegisterLoginLogo, { BelowLogo } from "../components/Register_login_Logo";
import { CgPassword } from "react-icons/cg";



const Login = () => {


  
    const [currentStep, setCurrentStep] = useState(0);
   

     const navigate = useNavigate();
    const [data, setData] = useState({ email: "", password: "" });
    const [message, setMessage] = useState("");
    const { login } = useContext(AuthContext);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
       
        e.preventDefault();
       
         setLoading(true);

        try {
            const response = await axios.post(`${API_URL}/auth/login`, data);

            if (response.status === 200) {
                if (response.data.status === "successful") {
                   showAlert( 'success' , 'success!',  response.data.message);
                    login(response.data.token, response.data.user);
 
                      navigate('/select-role');

                    showAlert( 'success' , 'success!',  `Login Successful ` );
                    
                    setLoading(false);

                } else {
                    showAlert('Error'   ,  'error!' ,response.data.message);
                   
                    setLoading(false);
                }
            } else {
                showAlert( 'Error' ,'error!' ,  "Server Error");
               
                setLoading(false);
            }
        } catch (error) {
            showAlert('Error' , 'error!', "Server Error! Check Your Network Connection");
            setLoading(false);
        }

       
    };





  return (
    <>
   
      <div  style={{color:"black !important" , fontWeight:"bolder" ,
        height:"100% !important", backgroundColor:"#F44336",
        marginTop:"0px !important", 
        position:"absolute"  ,top:"0px"
        
        }} class="container-fluid px-1 px-md-4 py-5  mx-auto">
                 

                <RegisterLoginLogo/>
       


        <div class="row d-flex justify-content-center">


           
               
                 
          <div class="col-12 col-md-11 col-lg-10 col-xl-9">
            <div class="card card0 border-0">
              <div class="row">
                <div class="col-12">
                  <div class="card card00 m-2 border-0">
                    <div class="row text-center justify-content-center px-3">
                     {/*  <p class="prev text-danger" id="back"><span class="fa fa-long-arrow-left"> Go Back</span></p> */}
                      <h3 class="mt-4"  style={{fontWeight:"bolder"}}>Login</h3>
                    </div>
                    <div class="d-flex flex-md-row px-3 mt-4 flex-column-reverse">
                      <div class="col-md-6">
                        <div class="card1">

                          <ul id="progressbar" className="text-center">
                            <li className={`${/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email) ? 'active' : ''} step0`}></li>
                            <li className={`${data.password !== '' ? 'active' : ''} step0`}></li>
                            <li className={ `${(loading) ?  'active'   : " "} step0`}  ></li>
                           
                          </ul>

                          <h6    class="mb-5">Enter your Email</h6>
                          <div  style={{ height : "1.3cm"}}></div>
                          <h6 class="mb-5">Enter Your password</h6>
                          <div  style={{ height : "1.3cm"}}></div>
                          <h6 class="mb-5">Login</h6>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <form  onSubmit={handleSubmit}>

                        <div class="card2 first-screen show ml-2">
                          <div  style={{display : "none"}}  class="row text-center px-3 mr-2">
                            <div class="mb-2 col-2">
                              <span class="fa fa-reddit social"></span>
                            </div>
                            <div class="mb-2 col-2">
                              <span class="fa fa-facebook social"></span>
                            </div>
                            <div class="mb-2 col-2">
                              <span class="fa fa-linkedin social"></span>
                            </div>
                            <div class="mb-2 col-2">
                              <span class="fa fa-google-plus social"></span>
                            </div>
                            <div class="mb-2 col-2">
                              <span class="fa fa-twitter social"></span>
                            </div>
                            <div class="mb-2 col-2">
                              <span class="fa fa-dropbox social"></span>
                            </div>
                          </div>


                          <div class="row px-3 mt-4">
                            <div class="form-group mt-1 mb-1">
                              <input
                                type="text"
                                id="email"
                                class="form-control"
                                required
                               
                                onChange={(e) => setData({ ...data, email: e.target.value })}
                              />
                              <label  style={{ paddingLeft:"20px"  }} class="ml-3 form-control-placeholder" for="email">Email</label>
                            </div>
                           
                          </div>
                          
                        </div>

                        <div class="card2  show ml-2">
                          <div class="row px-3 mt-3">
                            <div class="form-group mt-1 mb-1">
                              <input
                                type="password"
                                id="pwd"
                                class="form-control"
                                required
                                
                               onChange={(e) => setData({ ...data, password: e.target.value })}
                              />
                              <label   style={{ paddingLeft:"20px"  }} class="ml-3 form-control-placeholder" for="pwd">Password</label>
                            </div>
                          
                          </div>
                          
                        </div>

                        <div  style={{ marginTop:"20px"   , marginBottom:"20px"}} >


                        
                           <button disabled={loading}
                                type="submit"

                                className="btn btn-primary "
                               
                              >
                              { (loading) ?  'Loading...'   : "Login"} 
                              </button>


                             

                      </div>

                       </form>






                      </div>
                    </div>

                  </div>
                  <div class="col-12">
                    <br/>

                    <Link   style={{ marginRight: "5px"    ,  marginLeft : "5px"}}  to="/register">

                           <button
                                type="button"
                                className="btn btn-primary "
                               
                               
                              >
                               Register
                              </button>


                        </Link>

                          <Link  to="/forgot-password">
                            <button
                                type="button"
                                className="btn btn-danger "
                               
                               
                              >
                             Forgot Password  ?
                              </button>

                              </Link>
                       
                       <BelowLogo/>


                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


    </>
  );
};

export default Login;
