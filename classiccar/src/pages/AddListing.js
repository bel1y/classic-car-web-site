import React, { useState } from 'react'
import '../css/addlisting.css'
import { MdArrowBackIosNew } from "react-icons/md";
import logo from '../img/classiccarlogo.webp'
import { FaLock, FaEyeSlash, FaPhoneAlt, FaQuestion, FaInfo } from "react-icons/fa";
import { PiExportBold } from "react-icons/pi";
import { FaPlus } from "react-icons/fa6";

export default function AddListing() {

  const [data, setData] = useState(JSON.parse(localStorage.getItem("user")));

    function return1(){
    window.location="/my-list"
    }

    function open() {
      document.querySelector(".for-display-block-and-none-addlist").style = "display: block"
      document.querySelector(".for-alittle-bitten-info-next-page").style = "display: none"
      document.querySelector(".third-button-information-div-add-listing").style = "display: none"
    }
    function open1() {
      document.querySelector(".for-display-block-and-none-addlist1").style = "display: block"
      document.querySelector(".for-alittle-bitten-info-next-page1").style = "display: none"
      document.querySelector(".third1-button-information-div-add-listing").style = "display: none"
    }
    function open2() {
      document.querySelector(".for-display-block-and-none-addlist2").style = "display: block"
      document.querySelector(".for-alittle-bitten-info-next-page2").style = "display: none"
      document.querySelector(".third2-button-information-div-add-listing").style = "display: none"
    }
    function open3() {
      document.querySelector(".third3-button-information-div-add-listing").style = "display: none"
      document.querySelector(".for-display-block-and-none-addlist4").style = "display: flex"
    }

  return (
    <div className='big-div-addlisting'>
        <div className="instead-of-navbar">
        <div className="instead-of-navbar-img">
        <img src={logo} alt="" />
        </div>
            <div className="instead-of-navbar-text">
                <p>You are on a secure page for adding a new listing to sell your classic car. If you came here by mistake, or are not ready to list you car yet,<br />
                <b onClick={()=>return1()}><MdArrowBackIosNew/> click here to return to your previous page.</b>
                </p>
                <p className="instead-of-navbar-text1"><FaLock /></p>
            </div>
            <p></p>
        </div>
        <div className="big-div-addlisting-for-text">
        <h1>Add a Regular Listing</h1>
        <h3>Enter your vehicle information to begin your Regular Listing.</h3>
        </div>
        
      <div className="account-information-div-add-listing for-display-block-and-none-addlist3">
        <div className="first-account-information-div-add-listing">
          <p>Contact Information</p>
        </div>
        <div className="second-account-information-div-add-listing">
<div className="inside-account-information-div-add-listing">
  <div className="first-inside-account-information-div-add-listing">
    <p>First Name</p>
    <h3>{data.firstname}</h3>
  </div>
  <div className="first-inside-account-information-div-add-listing">
    <p>Last Name</p>
    <h3>{data.lastname}</h3>
  </div>  
</div>
<div className="inside-account-information-div-add-listing">
  <div className="first-inside-account-information-div-add-listing">
    <p>Email Address</p>
    <h3 className=''>{data.email}</h3>
  </div>
  <div className="first-inside-account-information-div-add-listing">
    <p>Telephone</p>
    <h3>{data.phone}</h3>
  </div>  
</div>
        </div>
        <div className="third-button-information-div-add-listing">
          <button onClick={()=>open()}>CONTINUE</button>
        </div>
      </div>
      <div className="account-information-div-add-listing for-display-block-and-none-addlist">
        <div className="first-account-information-div-add-listing">
          <p>Basic Vehicle Information</p>
        </div>
        <div className="second-input-information-div-add-listing">
    <div className="inside-input-acc-div-add-listing">
      <div className="first-inside-input-acc-div-add-listing">
        <p>Year</p>
        <input type="number" />
      </div>
      <div className="first-inside-input-acc-div-add-listing">
        <p>Make</p>
        <select name="" id="">
          <option value="">Make Selection</option>
        </select>
      </div>
      <div className="first-inside-input-acc-div-add-listing">
        <p>Model</p>
        <select name="" id="">
        <option value="">Model Selection</option>
        </select>
      </div>
      <div className="first-inside-input-acc-div-add-listing">
        <p>Price</p>
        <input type="text" placeholder='0,00'/>
      </div>
    </div>
    <div className="inside-input-acc-div-add-listing">
      <div className="first-inside-input-acc-div-add-listing">
        <p>Country</p>
        <select name="" id=""></select>
      </div>
      <div className="first-inside-input-acc-div-add-listing">
        <p>City</p>
        <input type="text" />
      </div>
      <div className="first-inside-input-acc-div-add-listing">
        <p>State</p>
        <input type="text" />
      </div>
      <div className="first-inside-input-acc-div-add-listing">
        <p>Zip Code</p>
        <input type="text"/>
      </div>
    </div>
        </div>
        <div className="third1-button-information-div-add-listing">
          <button onClick={()=>open1()}>CONTINUE</button>
        </div>
      </div>
      <div className="account-information-div-add-listing for-display-block-and-none-addlist1">
        <div className="first-account-information-div-add-listing">
          <p>Extended Vehicle Information</p>
        </div>
        <div className="second-input-information-div-add-listing">
    <div className="inside-input-acc-div-add-listing">
      <div className="first-inside-input-acc-div-add-listing">
        <p>Exterior Color</p>
        <input type="number" />
      </div>
      <div className="first-inside-input-acc-div-add-listing">
        <p>Interior Color</p>
    <input type="text" />
      </div>
      <div className="first-inside-input-acc-div-add-listing">
        <p>Transmission</p>
        <select name="" id="">
        <option value="">Model Selection</option>
        </select>
      </div>
    </div>
    <div className="inside-input-acc-div-add-listing">
      <div className="first-inside-input-acc-div-add-listing">
        <p>Odometer</p>
        <input type="text" />
      </div>
    </div>
        </div>
        <div className="fourth-input-information-div-add-listing">
          <p>Description</p>
          <textarea name="" id=""></textarea>
        </div>
        <div className="third2-button-information-div-add-listing">
          <button onClick={()=>open2()}>CONTINUE</button>
        </div>
      </div>
      <div className="account-information-div-add-listing for-display-block-and-none-addlist2">
        <div className="first-account-information-div-add-listing">
          <p>Photos</p>
        </div>
        <div className="second-add-photo-information-div-add-listing">
    <div className="inside-add-photo-acc-div-add-listing">
    <h5><FaEyeSlash /></h5>
    <h5>Don't have any photos yet?</h5>
    <p>No problem, you can skip this step and add photos after you have finished creating your listing</p>
    </div>
    <div className="inside-add-photo-acc-div-add-listing">
    <h4><FaPhoneAlt  /></h4>
    <h5>Don't know how to upload photos?</h5>
    <p>That's ok, our Customer Support team are available to help you with this after you have finished creating your listing: <b>480-285-1600</b></p>
    </div>
    <div className="inside-add-photo-acc-div-add-listing">
    <h6><FaQuestion  /></h6>
    <h3>Ready to add photos?</h3>
    <span>Click here to get info on our photo requirements.</span>
    </div>
        </div>
        <div className="fourth-add-photo-information-div-add-listing">
          <p>Your Uploaded Photos:</p>
          <div className="info-div-about-image-add-listing">
            <p><FaInfo /></p>
            <h6>Photos in this box will show in your listing on the Vehicle Details Page Carousel. To remove an image, simply click on the " X " at the top-right of the thumbnail image. Only upload photos taken in landscape mode.</h6>
          </div>
          <div className="place-for-image-looking-add-listing">
            
            </div>
        </div>
        <div className="fifth-add-photo-information-div-add-listing">
<h5>Drag and drop images below, or click below to select files from your computer or device.</h5>
  <h5>(Only JPG files are supported, iPhone/iPad photos taken with the 'LIVE' setting turned on are not supported. Each photo file size must be under 10 MB)</h5>
   <h5>Please note: For best representation of your vehicle, photos should be taken in landscape mode only.</h5>
        </div>
        <div className="sixth-add-photo-information-div-add-listing">
        {/* <input type="file" /> */}
        <div className="inside-sixth-add-photo-information-div-add-listing">
        <h2><PiExportBold /></h2>
        <p>Drag & Drop images here or click to select files - use only photos taken in landscape mode.</p>
        </div>
        
        </div>
        <div className="third3-button-information-div-add-listing">
          <button onClick={()=>open3()}>CONTINUE</button>
        </div>
      </div>
      <div className="for-display-block-and-none-addlist4">
        <button>Continue to Check-Out</button>
      </div>

      <div className="for-alittle-bitten-info-next-page">
        <h6><FaPlus /></h6><p>Basic Vehicle Information</p>
      </div>
      <div className="for-alittle-bitten-info-next-page1">
        <h6><FaPlus /></h6><p>Extended Vehicle Information</p>
      </div>
      <div className="for-alittle-bitten-info-next-page2">
        <h6><FaPlus /></h6><p>Photos</p>
      </div>

    </div>
  )
}
