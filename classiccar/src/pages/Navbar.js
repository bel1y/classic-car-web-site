import React from 'react'
import logo from '../img/classiccarlogo.webp'
import { LuLogIn } from "react-icons/lu";
import { SlMenu } from "react-icons/sl";
import '../css/navbar.css'

export default function Navbar() {
    function OpenMedia() {
        document.querySelector(".media-text-navbar").classList.toggle("open-media-text-navbar")
    }
  return (
    <div className='big-navbar'>
        <div className="logo-navbar">
            <img src={logo} alt="" />
        </div>
        <div className="text-navbar">
            <p>SEARCH</p>
            <p>SELL A CAR</p>
            <p>FIND DEALERS</p>
            <p>JOIN OUR DEALERS</p>
            <p>AUCTION CENTRAL</p>
            <p>RESOURCES</p>
            <p>JOURNAL</p>
            <p>AUTOHUNTER</p>
        </div>
        <div className="login-navbar">
            <p>LOGIN</p>
            <p className='LuLogIn-navbar'><LuLogIn /></p>
        </div>
        <div className="mediya-navbar">
        <p className='LuLogIn-navbar'><LuLogIn /></p>
            <p className='SlMenu-navbar' onClick={()=>OpenMedia()}><SlMenu /></p>
        </div>
        <div className="media-text-navbar">
            <p>HOME</p>
            <p>SEARCH</p>
            <p>SELL A CAR</p>
            <p>FIND DEALERS</p>
            <p>JOIN OUR DEALERS</p>
            <p>AUCTION CENTRAL</p>
            <p>RESOURCES</p>
            <p>JOURNAL</p>
            <p>AUTOHUNTER</p>
        </div>
    </div>
  )
}