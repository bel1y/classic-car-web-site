import React from 'react'
import '../css/footer.css'
import logo from'../img/classiccarlogo.webp'
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
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
  return (
    <div className='classiccar-footer'>
        <div className="up-footer">
            <div className="logo-footer">
                <img src={logo} alt="" onClick={()=>windowlocation()}/>
            </div>
            <div className="text-footer">
        <h1>MORE INFO</h1>
        <hr />
        <div className="big-df-div-footer">
           <div className="df-first-div-footer">
           <p onClick={()=>windowlocation1()}>SEARCH</p>
            <p onClick={()=>windowlocation2()}>SELL A CAR</p>
            <p >FIND DEALERS</p>
        </div>
        <div className="df-second-div-footer">
        <p onClick={()=>windowlocation5()}>JOIN OUR DEALERS</p>
            <p onClick={()=>windowlocation3()}>AUCTION CENTRAL</p>
            <p onClick={()=>windowlocation4()}>RESOURCES</p>    
        </div> 
        </div>
        
            </div>
            <div className="big-social-media-footer">
            <div className="social-mediya-footer">
            <div className="get-daily-footer">
                <p>GET DAILY NEWSLETTER</p>
            </div>
            <div className="network-footer">
                <p className='FaInstagram'><FaFacebookF /></p>
                <p className='FaInstagram'><FaXTwitter /></p>
                <p className='FaInstagram'><FaInstagram /></p>
                <p className='FaInstagram'><FaYoutube /></p>
                </div>
            </div>

            </div>
        </div>
        <div className="down-footer">
            <p>© 2024 <span>The Collector Car Network, LLC</span>, All rights reserved. "Safe-n-secure" and "Drive the Bid" are trademarks of The Collector Car Network, LLC. "AutoHunter" and "Drive your dream" are registered trademarks of The Collector Car Network, LLC. All other trademarks are the property of their respective owners.</p>
        </div>
    </div>
  )
}
