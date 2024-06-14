import React, { useState, useEffect } from 'react'
import '../css/addlisting.css'
import { MdArrowBackIosNew } from "react-icons/md";
import logo from '../img/classiccarlogo.webp'
import { FaLock, FaEyeSlash, FaPhoneAlt, FaQuestion, FaInfo } from "react-icons/fa";
import { PiExportBold } from "react-icons/pi";
import { FaPlus } from "react-icons/fa6";
import axios from 'axios'
import url from './host'  

export default function AddListing() {

  const [data, setData] = useState(JSON.parse(localStorage.getItem("user")));
  const [massive, setMassive] = useState([]);
  var [category, setCategory] = useState([]);
  var [subcategory, setSubCategory] = useState([]);


    useEffect(()=>{
      axios.get(`${url}/api/v1/cars`)
      .then(res => {
        axios.get(`${url}/api/v1/category`).then((res2) => {
          setCategory(res2.data);
          axios.get(`${url}/api/v1/subcategory`).then((res3) => {
            setSubCategory(res3.data);
          });
        });
        setMassive(res.data)
      })
      .catch(err => {

      })
    }, [])

    function return1(){
    window.location="/my-list"
    }

    function open() {

        document.querySelector(".for-display-block-and-none-addlist").style = "display: block"
        document.querySelector(".for-alittle-bitten-info-next-page").style = "display: none"
        document.querySelector(".third-button-information-div-add-listing").style = "display: none"


    }
    function open1() {
      if (document.querySelector("#year-add-listing").value == "") {
        document.querySelector("#year-add-listing").style = "box-shadow: 0px 0px 10px red"
      }
      else if(document.querySelector("#make-add-listing").value == ""){
        document.querySelector("#make-add-listing").style = "box-shadow: 0px 0px 10px red"
      }
      else if(document.querySelector("#model-add-listing").value == ""){
        document.querySelector("#model-add-listing").style = "box-shadow: 0px 0px 10px red"
      }
      else if(document.querySelector("#price-add-listing").value == ""){
        document.querySelector("#price-add-listing").style = "box-shadow: 0px 0px 10px red"
      }
      else if(document.querySelector("#location-add-listing").value == ""){
        document.querySelector("#location-add-listing").style = "box-shadow: 0px 0px 10px red"
      }
      else if(document.querySelector("#state-add-listing").value == ""){
        document.querySelector("#state-add-listing").style = "box-shadow: 0px 0px 10px red"
      }
      else{
        document.querySelector(".for-display-block-and-none-addlist1").style = "display: block"
        document.querySelector(".for-alittle-bitten-info-next-page1").style = "display: none"
        document.querySelector(".third1-button-information-div-add-listing").style = "display: none"
        document.querySelector("#year-add-listing").style = "box-shadow: none"
        document.querySelector("#make-add-listing").style = "box-shadow: none"
        document.querySelector("#model-add-listing").style = "box-shadow: none"
        document.querySelector("#price-add-listing").style = "box-shadow: none"
        document.querySelector("#location-add-listing").style = "box-shadow: none"
      }



    }
    function open2() {
      if(document.querySelector("#exterior-color-add-listing").value == ""){
        document.querySelector("#exterior-color-add-listing").style = "box-shadow: 0px 0px 10px red"
      }
      else if(document.querySelector("#interior-color-add-listing").value == ""){
        document.querySelector("#interior-color-add-listing").style = "box-shadow: 0px 0px 10px red"
      }
      else if(document.querySelector("#transmission-add-listing").value == ""){
        document.querySelector("#transmission-add-listing").style = "box-shadow: 0px 0px 10px red"
      }
      else if(document.querySelector("#description-add-listing").value == ""){
        document.querySelector("#description-add-listing").style = "box-shadow: 0px 0px 10px red"
      }
      else{
        document.querySelector(".for-display-block-and-none-addlist2").style = "display: block"
        document.querySelector(".for-alittle-bitten-info-next-page2").style = "display: none"
        document.querySelector(".third2-button-information-div-add-listing").style = "display: none"
        document.querySelector("#exterior-color-add-listing").style = "box-shadow: none"
        document.querySelector("#interior-color-add-listing").style = "box-shadow: none"
        document.querySelector("#transmission-add-listing").style = "box-shadow: none"
        document.querySelector("#description-add-listing").style = "box-shadow: none"
      }
    }
    function open3() {
      document.querySelector(".third3-button-information-div-add-listing").style = "display: none"
      document.querySelector(".for-display-block-and-none-addlist4").style = "display: flex"
    }

    function newcar() {
      var formdata = new FormData()

      formdata.append("year", document.querySelector("#year-add-listing").value);
      formdata.append("category", document.querySelector("#make-add-listing").value);
      formdata.append("subcategory", document.querySelector("#model-add-listing").value);
      formdata.append("price", document.querySelector("#price-add-listing").value);
      formdata.append("location", document.querySelector("#location-add-listing").value);
      formdata.append("exterior_color", document.querySelector("#exterior-color-add-listing").value);
      formdata.append("interior_color", document.querySelector("#interior-color-add-listing").value);
      formdata.append("transmission", document.querySelector("#transmission-add-listing").value);
      formdata.append("odometer", document.querySelector("#odometer-add-listing").value);
      formdata.append("description", document.querySelector("#description-add-listing").value);
      formdata.append("title", document.querySelector("#make-add-listing").value && document.querySelector("#model-add-listing").value);
      formdata.append("image", "https://photos.classiccars.com/cc-temp/listing/183/8996/45508634-2011-bmw-1-series-thumb.jpg");
      formdata.append("state", document.querySelector("#state-add-listing").value);
      formdata.append("user_id", data.id);
      formdata.append("power_windows", true);
      formdata.append("air_conditioning", true);
      formdata.append("power_brakes", true);
      formdata.append("engine_condition", "good");
      formdata.append("looking", 0);
      // formdata.append("all_img", document.querySelector("#image-add-listing").value);

      axios
      .post(`${url}/api/v1/cars`, formdata)
      .then(res => {
        window.location = '/my-list'
      })
      .catch(err => {
        alert(err)
      })
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
        <input type="number" id='year-add-listing'/>
      </div>
      <div className="first-inside-input-acc-div-add-listing">
        <p>Make</p>
        <select name="" id="make-add-listing" onChange={(e)=>{
                  var a =[...category]
                  var d=a.filter(item=>item.id==e.target.value)
                  setSubCategory(d[0].sub)  
                }}>
        {category.map((item) => {
      return <option value={item.id}>{item.title}</option>;
})}
        </select>
      </div>
      <div className="first-inside-input-acc-div-add-listing">
        <p>Model</p>
        <select name="" id="model-add-listing">
        {subcategory.map((item) => {
      return <option value={item.id}>{item.title}</option>;
})}          
        </select>

      </div>
      <div className="first-inside-input-acc-div-add-listing">
        <p>Price</p>
        <input type="number" placeholder='0,00' id='price-add-listing'/>
      </div>
    </div>
    <div className="inside-input-acc-div-add-listing">
      <div className="first-inside-input-acc-div-add-listing">
        <p>Country</p>
        <input type="text" id='location-add-listing'/>
      </div>
      <div className="first-inside-input-acc-div-add-listing">
        <p>City</p>
        <input type="text" id='city-add-listing'/>
      </div>
      <div className="first-inside-input-acc-div-add-listing">
        <p>State</p>
        <input type="text" id='state-add-listing'/>
      </div>
      <div className="first-inside-input-acc-div-add-listing">
        <p>Zip Code</p>
        <input type="text" id='zip-add-listing'/>
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
        <input type="text" id='exterior-color-add-listing'/>
      </div>
      <div className="first-inside-input-acc-div-add-listing">
        <p>Interior Color</p>
    <input type="text" id='interior-color-add-listing'/>
      </div>
      <div className="first-inside-input-acc-div-add-listing">
        <p>Transmission</p>
        <select name="" id="transmission-add-listing">
        <option value="Manual">Manual</option>
        <option value="Automatic">Automatic</option>
        </select>
      </div>
    </div>
    <div className="inside-input-acc-div-add-listing">
      <div className="first-inside-input-acc-div-add-listing">
        <p>Odometer</p>
        <input type="number" id='odometer-add-listing'/>
      </div>
    </div>
        </div>
        <div className="fourth-input-information-div-add-listing">
          <p>Description</p>
          <textarea name="" id="description-add-listing"></textarea>
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
        <input type="file" id='image-add-listing'/>
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
        <button onClick={() => newcar()}>ADD CAR</button>
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
