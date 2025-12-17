/* eslint-disable no-unused-vars */


import { useState, useContext, useEffect } from "react";

import axios from "axios";
import { API_URL, showAlert, AuthContext } from "../util/api";
import { Link, useNavigate } from "react-router-dom";
import './form_style.css';
import RegisterLoginLogo, { BelowLogo } from "../components/Register_login_Logo";


const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [inviteCode, setInviteCode] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const [store_code, setCode] = useState("");
  const router = useNavigate();
  const { login } = useContext(AuthContext);
  const queryParams = new URLSearchParams(window.location.search);
  const code = queryParams.get('code');


  const handleSendVerificationCode = async () => {
    try {
      setLoading(true);

      const response = await axios.post(`${API_URL}/send-verification-code`, { email });

      if (response.data.status === "successful") {



        setCode(response.data.code);

        showAlert("success", "Success!", "Verification code sent to your email.");
        setLoading(false);


      } else {

        showAlert("error", "Error!", response.data.message);
        setLoading(false);
      }



    } catch (err) {
      if (axios.isAxiosError(err) && err.response?.data?.message) {

        showAlert("error", "Error!", err.response.data.message);

      } else {


        showAlert("error", "Error!", "Failed to send verification code.");

      }
    }
  };

  const handleRegister = async (e) => {

   
    e.preventDefault();

    if (email === "") {

      showAlert("error", "Error!", "Please enter your email address.");

      return;
    }
    if (!verificationCode) {

      showAlert("error", "Error!", "Please enter the verification code sent to your email.");


      return;
    } else {
      if (verificationCode != store_code) {


        showAlert("error", "Error!", "Verification code is incorrect.");

        return;
      }
    }

    if (password !== confirmPassword) {

      showAlert("error", "Error!", "Passwords do not match");

      return;
    }

    try {
      setLoading(true);
      const response = await axios.post(`${API_URL}/auth/register`, {
        name,
        email,
        password


      });

      if (response.data.status === "successful") {

        login(response.data.token, response.data.user);
        /*    localStorage.setItem('token', response.data.token);
           localStorage.setItem('user', JSON.stringify(response.data.user));
           console.log("User data:", response.data.user); */
        login(response.data.token, response.data.user);
        router("/select-role");
        showAlert("success", "Success!", "Registration successful!");

      } else {

        showAlert("error", "Error!", response.data.message);

      }

      //login after registration

    } catch (err) {
      if (axios.isAxiosError(err) && err.response?.data?.message) {

        showAlert("error", "Error!", err.response.data.message);

      } else {


        showAlert("error", "Error!", "Registration failed. Try again.");
      }

    } finally {
      setLoading(false);

    }
  };

  useEffect(() => {

    if (code) {
      setInviteCode(code);
    }
  }, [code]);

  return (
    <>

      <div style={{
        color: "black !important", fontWeight: "bolder",
        backgroundColor: "#F44336"
      }} class="container-fluid px-1 px-md-4 py-5 mx-auto">


        <RegisterLoginLogo />

        <div class="row d-flex justify-content-center">
          <div class="col-12 col-md-11 col-lg-10 col-xl-9">
            <div class="card card0 border-0">
              <div class="row">
                <div class="col-12">
                  <div class="card card00 m-2 border-0">
                    <div class="row text-center justify-content-center px-3">
                      <h3 class="mt-4"> Create Your Account </h3>
                    </div>
                    <div class="d-flex flex-md-row px-3 mt-4 flex-column-reverse">
                      <div class="col-md-6">
                        <div class="card1">

                          <ul id="progressbar" className="text-center">
                            <li className={`step0 ${name !== '' ? 'active' : ''}`}></li>
                            <li className={`${/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? 'active' : ''} step0`}></li>
                            <li className={`step0 ${verificationCode !== '' ? 'active' : ''}`}></li>
                            <li className={`step0 ${password !== '' ? 'active' : ''}`}></li>
                            <li className={`step0 ${(password === confirmPassword) && password !== '' ? 'active' : ''}`}></li>
                            <li className={`step0 ${loading === true ? 'active' : ''}`}></li>
                          </ul>


                          <h6 class="mb-5">Enter your Name</h6>

                          <div style={{ height: "1.3cm" }}></div>

                          <h6 class="mb-5">Enter your Email</h6>

                          <div style={{ height: "1.3cm" }}></div>
                          <h6 class="mb-5">Get Verifcation Code </h6>
                          <div style={{ height: "1.3cm" }}></div>
                          <h6 class="mb-5">&nbsp;</h6>
                          <h6 class="mb-5">Set password</h6>
                          <div style={{ height: "1.3cm" }}></div>

                          <h6 class="mb-5">Confirm password</h6>
                          <div style={{ height: "1.3cm" }}></div>


                          <h6 class="mb-5">Submit Form </h6>
                        </div>
                      </div>
                      <div class="col-md-6">

                        <div class="card2 first-screen show ml-2">
                          <div style={{ display: "none" }} class="row text-center px-3 mr-2">
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

                          {/* Inline styles for the input hint — you can move to form_style.css */}
                          <style>{`

                        .input-with-hint { position: relative; display: flex; align-items: center; }
                        .hint-icon {
                          display:inline-flex;
                          align-items:center;
                          justify-content:center;
                          width:22px;
                          height:22px;
                          border-radius:50%;
                          background:#007bff;
                          color:#fff;
                          font-weight:700;
                          margin-left:8px;
                          cursor:help;
                          position:relative;
                          font-size:12px;
                        }
                        .hint-icon:focus { outline:2px solid rgba(0,123,255,0.3); }
                        .hint-text {
                          visibility:hidden;
                          opacity:0;
                          transition:opacity 0.15s ease;
                          position:absolute;
                          left:calc(100% + 8px);
                          top:50%;
                          transform:translateY(-50%);
                          background:#222;
                          color:#fff;
                          padding:8px 10px;
                          border-radius:4px;
                          white-space:nowrap;
                          z-index:50;
                          font-size:12px;
                          box-shadow:0 2px 6px rgba(0,0,0,0.2);
                        }
                        .hint-icon:hover .hint-text,
                        .hint-icon:focus .hint-text,
                        .hint-icon:active .hint-text {
                          visibility:visible;
                          opacity:1;
                        }
                        @media (max-width:576px){
                          .hint-text { left:auto; right:0; transform:translateY(-120%); }
                          .getcode_button{font-size:8px !important; 
                          padding:0px !important; }
                        }
                          h3.mt-4 {
                              text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.3),
                                         ;
                                         font-weight: bolder;
                            }
                              
                              
                              `}</style>

                          <div class="row px-3 mt-4">

                            <div class="form-group mt-1 mb-1 input-with-hint">
                              <input

                                type="text"
                                id="name"
                                class="form-control"
                                required
                                onChange={(e) => setName(e.target.value)}
                                value={name}
                              />
                              <label style={{ marginLeft: "0.5cm" }} class="ml-3 form-control-placeholder" for="name">Name</label>

                              <span
                                class="hint-icon"
                                tabIndex="0"
                                role="button"
                                aria-label="Name hint"
                                title="More info about the name field"
                              >
                                ?
                                <span class="hint-text">Enter your full name (first and last).</span>
                              </span>
                            </div>

                            <div class="form-group mt-1 mb-1 input-with-hint">
                              <input
                                type="email"
                                id="email"
                                class="form-control"
                                required
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                              />
                              <label style={{ marginLeft: "0.5cm" }} class="ml-3 form-control-placeholder" for="email">Email</label>

                              <span
                                class="hint-icon"
                                tabIndex="0"
                                role="button"
                                aria-label="Email hint"
                                title="More info about the email field"
                              >
                                ?
                                <span class="hint-text">We'll send a verification code to this email.</span>
                              </span>
                            </div>



                            <div class="form-group mt-1 mb-1 input-with-hint">
                              <input
                                type="text"
                                id="verification_code"
                                class="form-control"
                                required
                                onChange={(e) => setVerificationCode(e.target.value)}
                                value={verificationCode}
                              />
                              <label style={{ marginLeft: "0.5cm" }} class="ml-3 form-control-placeholder" for="verification_code">Enter Verification Code</label>

                              <span
                                class="hint-icon"
                                tabIndex="0"
                                role="button"
                                aria-label="Verification code hint"
                                title="More info about the verification code"
                              >
                                ?
                                <span class="hint-text">Check your inbox for a 6‑digit code.</span>
                              </span>
                            </div>

                            {/* Get Code button: active only when name is not empty */}
                            <button
                              type="button"
                              class="next-button text-center mt-1 ml-2 btn  getcode_button"
                              onClick={handleSendVerificationCode}

                              disabled={!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || loading}
                              style={{
                                opacity: (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) ? 0.6 : 1,
                                cursor: (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) ? "not-allowed" : "pointer",
                                padding: "8px ",
                                border: "none",
                                background: "#007bff",
                                color: "#fff",
                                borderRadius: "4px",

                              }}
                            >

                              {loading ? "Loading..." : " Get Code"}
                            </button>

                            <br />





                            <div class="form-group mt-1 mb-1 input-with-hint">
                              <input type="password" id="password"
                                class="form-control" required

                                onChange={(e) => setPassword(e.target.value)}
                                value={password}
                                name="password"

                              />
                              <label style={{ marginLeft: "0.5cm" }} class="ml-3 form-control-placeholder"
                                for="password">Password</label>


                            </div>



                            <button
                              type="button"
                              className="next-button btn btn-sm btn-outline-secondary"
                              onClick={(e) => {
                                const p = document.getElementById("password");
                                if (!p) return;
                                p.type = p.type === "password" ? "text" : "password";
                                const icon = e.currentTarget.querySelector('i');
                                if (icon) {
                                  icon.classList.toggle('fa-eye');
                                  icon.classList.toggle('fa-eye-slash');
                                }
                              }}
                            >
                              <i className="fa fa-eye" aria-hidden="true"></i>

                            </button>










                            <div class="form-group mt-1 mb-1">
                              <input type="password" id="confirmpassword"
                                class="form-control" required
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                value={confirmPassword}
                              />
                              <label style={{ marginLeft: "0.5cm" }} class="ml-3 form-control-placeholder"
                                for="confirmpassword">Confirm Password</label>
                            </div>




                            <button
                              type="button"
                              className=" next-button  btn btn-sm btn-outline-secondary"
                              onClick={(e) => {
                                const p = document.getElementById("confirmpassword");
                                if (!p) return;
                                p.type = p.type === "password" ? "text" : "password";
                                const icon = e.currentTarget.querySelector('i');
                                if (icon) {
                                  icon.classList.toggle('fa-eye');
                                  icon.classList.toggle('fa-eye-slash');
                                }
                              }}
                            >
                              <i className="fa fa-eye" aria-hidden="true"></i>
                            </button>






                            <div className="">

                              <button
                                type="button"
                                className="btn btn-primary btn-block"
                                onClick={handleRegister}
                                disabled={loading}
                              >
                                {loading ? "Registering..." : "Register"}
                              </button>
                            </div>




                            {/* <div class="next-button text-center mt-1 ml-2">
                              <span class="fa fa-arrow-right"></span>
                            </div> */}

                            <h2 style={{ fontSize: "12px" }} class="text-muted get-bonus mt-4 mb-5"> By creating an account you agree to our
                              <a href="/terms">Terms</a> and <a href="/privacy">Privacy Policy</a>. </h2>


                          </div>

                        </div>

                      </div>
                    </div>

                  </div>
                  <div class="col-12">

                    <Link style={{ marginLeft: "5px" }} to="/login">

                      <button
                        type="button"
                        className="btn btn-primary "


                      >
                        Login
                      </button>


                    </Link>
                    <BelowLogo />
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

export default Register;
