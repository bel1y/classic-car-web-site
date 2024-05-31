import React from 'react'
import Nav from './Nav'
import Footer from './Footer'
import '../css/forgotpassword.css'

export default function ForgotPasswor() {
    function open() {
        if (document.querySelector(".input-and-button-forgotpassword input").value == "") {
            document.querySelector(".input-and-button-forgotpassword input").style="box-shadow: 0px 0px 5px red"
        }else{
    window.location="/forgot-password-confirmation"
        }
    }
  return (
    <div className='forgot-password-big-div'>
        <Nav/>
        <h5>Forgot My Password</h5>
        <h3>Please enter required information below.</h3>

    <div className="send-email-for-resent-forgotpassword">
        <p>Enter Your Email</p>
        <div className="input-and-button-forgotpassword">
            <input type="text" name="" id="" />
            <button onClick={()=>open()}>EMAIL LINK</button>
        </div>
    </div>

    <h4><b>Note:</b> If you don't see anything in your email inbox, be sure to check your junk mail to see if it was delivered there.</h4>

        <Footer/>
    </div>
  )
}
