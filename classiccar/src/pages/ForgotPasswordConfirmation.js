import React from 'react'
import Nav from './Nav'
import Footer from './Footer'
import '../css/forgotpassword.css'

export default function ForgotPasswordConfirmation() {
  return (
    <div className='forgot-password-big-div'>
        <Nav/>
        <h5>Forgot Password Confirmation</h5>
        <h3>Please check your email to reset your password.</h3>

        <h6>An email has been sent to the email address you provided from your account. Click on the link inside of the email to reset your password.</h6>
        <h6>If you do not see an email in your inbox, please check your spam/junk folders of your email account.</h6>
        <h6>If the email did land in your spam/junk folders, you may want to make sure all emails from ClassicCars.com go directly to your inbox.</h6>

        <Footer/>
    </div>
  )
}
