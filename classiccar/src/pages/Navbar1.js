import React, {useState} from 'react'
import logo from '../img/classiccarlogo.webp'
import { LuLogIn } from "react-icons/lu";
import { SlMenu } from "react-icons/sl";
import { IoPerson } from "react-icons/io5";
import '../css/navbar.css'
import { FaLock } from "react-icons/fa";

export default function Navbar1() {
    const [data, setData] = useState(JSON.parse(localStorage.getItem("user")));
    function OpenMedia() {
        // document.querySelector(".media-text-navbar1").style="display:none"
        document.querySelector(".media-text-navbar").classList.toggle("open-media-text-navbar")
    }
    function Openaccount() {
        // document.querySelector(".media-text-navbar").style="display:none"
        document.querySelector(".media-text-navbar1").classList.toggle("open-media-text-navbar1")
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
    function windowlocation8() {
        window.location = '/my-list'
    }
    function windowlocation9() {
        window.location = '/my-alert'
    }
    function windowlocation10() {
        window.location = '/inventory-analytic'
    }
    function windowlocation11() {
        window.location = '/buyer'
    }
    function windowlocation12() {
        window.location = '/manage-account'
    }
    function windowlocation13() {
        window.location = '/favorites'
    }
    function logout() {
        localStorage.clear();
        window.location = "/"
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
        </div>
        <div className="my-account-check-open" >
<div className="name-my-account">
    <p>Hello, {data.firstname}  </p>
</div>
<div className="df-my-account-div" onClick={()=>Openaccount()}>
<p>MY ACCOUNT</p>
<p className='IoPerson-navbar'><IoPerson /></p>
</div>
        </div>
        <div className="mediya-navbar">
        <p className='IoPerson-navbar1' onClick={()=>Openaccount()}><IoPerson /></p>
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

        </div>
        <div className="media-text-navbar1">
        <p onClick={()=>windowlocation8()}>MY LISTING</p>
        <p onClick={()=>windowlocation9()}>MY ALERTS</p>
        <p onClick={()=>windowlocation10()}>INVENTORY ANALYTICS</p>
        <p onClick={()=>windowlocation11()}>BUYER INQUIRIES</p>
        <p onClick={()=>windowlocation12()}>MANAGE ACCOUNT</p>
        <p onClick={()=>windowlocation13()}>FAVORITES</p>
        <p onClick={()=>logout()}><span><FaLock /></span>LOG OUT</p>
        </div>
    </div>
  )
}