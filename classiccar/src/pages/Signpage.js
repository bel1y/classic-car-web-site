import React, { useState, useEffect } from "react";
import "../css/signpage.css";
import Navbar from "./Nav";
import Footer from "./Footer";
import axios from "axios";
import url from './host'

export default function Signpage() {
  function show() {
    document.querySelector("#password-for-signup").type = "text";
  }

  function signin() {
    var formdata = new FormData();
    formdata.append("email", document.querySelector("#email-for-signin").value);
    formdata.append("password", document.querySelector("#password-for-signin").value
    );

    axios
      .post(`${url}/auth/v1/login`, formdata)
      .then((res) => {
        window.location = "/";
        localStorage.setItem("user", JSON.stringify(res.data));
      })
      .catch((err) => {
        alert("Не правильная электронная почта или пароль");
      });
  }
  
  function signup() {
    var formdata = new FormData();
    formdata.append("email", document.querySelector("#email-for-signup").value);
    formdata.append(
      "password",
      document.querySelector("#password-for-signup").value
    );
    formdata.append(
      "lastname",
      document.querySelector("#lastname-for-signup").value
    );
    formdata.append(
      "firstname",
      document.querySelector("#firstname-for-signup").value
    );
    formdata.append("phone", document.querySelector("#phone-for-signup").value);

    axios
      .post(`${url}/auth/v1/users`, formdata)
      .then((res) => {
        if (document.querySelector("#email-for-signup").value == '') {
          document.querySelector("#email-for-signup").style = 'box-shadow: 0px 0px 10px red'
        }
        else{
          if (document.querySelector("#password-for-signup").value == '') {
            document.querySelector("#password-for-signup").style = 'box-shadow: 0px 0px 10px red'
          }
          else if (document.querySelector("#firstname-for-signup").value == '') {
            document.querySelector("#firstname-for-signup").style = 'box-shadow: 0px 0px 10px red'
          }
          else  if (document.querySelector("#lastname-for-signup").value == '') {
            document.querySelector("#lastname-for-signup").style = 'box-shadow: 0px 0px 10px red'
          }
          else if (document.querySelector("#phone-for-signup").value == '') {
            document.querySelector("#phone-for-signup").style = 'box-shadow: 0px 0px 10px red'
          }
          
          else{
            window.location = "/";
            localStorage.setItem("user", JSON.stringify(res.data)); 
          }
        }
      })
      .catch((err) => {
        alert("Попробуйти позже, ещё раз");
      });
  }


  return (
    <div className="big-div-signinandup">
      <Navbar />
      <h1>Welcome to ClassicCars.Com</h1>
      <h3>
        Sign up with ClassicCars.com to track favorite vehicles across
        devices,set email alerts for vehicles, sell a vehicle and much more!
      </h3>
      <div className="signin-signup-big-div">
        <div className="Login-big-div">
          <h2>Existing User</h2>
          <div className="existing-user-input">
            <p>Email</p>
            <input type="text" id="email-for-signin" />
            <p>Password</p>
            <input type="password" id="password-for-signin" />
            <div className="forgot-password-login">
              <p>
                <b>Forgot your password?</b>
              </p>
            </div>
            <div className="sing-for-button-login">
              <button onClick={() => signin()}>LOGIN</button>
            </div>
          </div>
        </div>
        <div className="new-user-big-div">
          <h2>New User</h2>
          <div className="existing-user-input">
            <p>Email</p>
            <input type="text" id="email-for-signup" />
            <p>Password</p>
            <div className="show-button-signup-login">
              <input type="password" id="password-for-signup" />
              <button onClick={() => show()}>SHOW</button>
            </div>
            <p>First Name</p>
            <input type="text" id="firstname-for-signup" />
            <p>Last Name</p>
            <input type="text" id="lastname-for-signup" />
            <p>Phone</p>
            <input type="text" id="phone-for-signup" />
            <div className="remember-me-login">
              <input type="checkbox" />
              <p>Remember my account</p>
            </div>
            <div className="sing-for-button-login">
              <button onClick={() => signup()}>CONTINUE</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
