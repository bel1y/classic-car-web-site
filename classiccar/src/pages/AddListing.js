import React, { useState } from 'react'
import '../css/addlisting.css'
import { MdArrowBackIosNew } from "react-icons/md";
import logo from '../img/classiccarlogo.webp'
import { FaLock } from "react-icons/fa";

export default function AddListing() {

  const [data, setData] = useState(JSON.parse(localStorage.getItem("user")));

    function return1(){
    window.location="/my-list"
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
        
      <div className="account-information-div-add-listing">
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
      </div>
      <div className="account-information-div-add-listing">
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
        <div className="third-button-information-div-add-listing">
          <button>CONTINUE</button>
        </div>
      </div>
      <div className="account-information-div-add-listing">
        <div className="first-account-information-div-add-listing">
          <p>Basic Vehicle Information</p>
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
        <div className="third-button-information-div-add-listing">
          <button>CONTINUE</button>
        </div>
      </div>

    </div>
  )
}
