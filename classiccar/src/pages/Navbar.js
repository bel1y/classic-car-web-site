import React from 'react'
import logo from '../img/classiccarlogo.webp'
import { LuLogIn } from "react-icons/lu";
import { SlMenu } from "react-icons/sl";
import '../css/navbar.css'

export default function Navbar() {
    function OpenMedia() {
        document.querySelector(".media-text-navbar").classList.toggle("open-media-text-navbar")
    }
    function windowlocation() {
        window.location = '/'
    }
    function windowlocation1() {
        window.location = '/search'
    }
    function windowlocation2() {
        window.location = '/sell-a-car'
    }
    function windowlocation3() {
        window.location = '/auction'
    }
    function windowlocation4() {
        window.location = '/resourse'
    }
    function windowlocation5() {
        window.location = '/join-net-work'
    }
    function windowlocation5() {
        window.location = '/join-net-work'
    }
    function windowlocation6() {
        window.location = '/find-dealers'
    }
    function windowlocation7() {
        window.location = '/login'
    }
  return (
    <div className='big-navbar'>
        <div className="logo-navbar">
            <img onClick={()=>windowlocation()} src={logo} alt="" />
        </div>
        <div className="text-navbar">
            <p onClick={()=>windowlocation1()}>SEARCH</p>
            <p onClick={()=>windowlocation2()}>SELL A CAR</p>
            <p onClick={()=>windowlocation6()}>FIND DEALERS</p>
            <p onClick={()=>windowlocation5()}>JOIN OUR DEALERS</p>
            <p onClick={()=>windowlocation3()}>AUCTION CENTRAL</p>
            <p onClick={()=>windowlocation4()}>RESOURCES</p>
            {/* <p>JOURNAL</p>
            <p>AUTOHUNTER</p> */}
        </div>
        <div className="login-navbar" onClick={()=>windowlocation7()}>
            <p>LOGIN</p>
            <p className='LuLogIn-navbar'><LuLogIn /></p>
        </div>
        <div className="mediya-navbar">
        <p className='LuLogIn-navbar' onClick={()=>windowlocation7()}><LuLogIn /></p>
            <p className='SlMenu-navbar' onClick={()=>OpenMedia()}><SlMenu /></p>
        </div>
        <div className="media-text-navbar">
            <p onClick={()=>windowlocation()}>HOME</p>
            <p onClick={()=>windowlocation1()}>SEARCH</p>
            <p onClick={()=>windowlocation2()}>SELL A CAR</p>
            <p onClick={()=>windowlocation6()}>FIND DEALERS</p>
            <p onClick={()=>windowlocation5()}>JOIN OUR DEALERS</p>
            <p onClick={()=>windowlocation3()}>AUCTION CENTRAL</p>
            <p onClick={()=>windowlocation4()}>RESOURCES</p>
            {/* <p>JOURNAL</p>
            <p>AUTOHUNTER</p> */}
        </div>
    </div>
  )
}