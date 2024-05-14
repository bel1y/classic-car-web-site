import React, {useState, useEffect} from 'react'
import Navbar from './Nav'
import Footer from './Footer'
import '../css/edityouracc.css'
import axios from 'axios'

export default function Edityouracc() {
    const [data, setData] = useState(JSON.parse(localStorage.getItem("user")));

    
    function edityouracc(id) {
        var formdata = new FormData();
        formdata.append("email", data.email);
        formdata.append("password", document.querySelector("#password-for-edit").value);
        formdata.append("lastname", document.querySelector("#lastname-for-edit").value);
        formdata.append("firstname", document.querySelector("#firstname-for-edit").value);
        formdata.append("phone", document.querySelector("#phone-for-edit").value);
    
        axios
          .put(`https://car-muhammadali-back.onrender.com/auth/v1/users/${id}`, formdata)
          .then((res) => {
            if (document.querySelector("#password-for-edit").value == document.querySelector("#password-for-edit1").value) {
            alert("уcпешно")
            window.location = "/manage-account";
            localStorage.setItem("user", JSON.stringify(res.data));
            }else{
                document.querySelector("#password-for-edit1").style="box-shadow: 0px 0px 10px red"
                alert("Пароли не совпадают")
            }
           
          })
          .catch((err) => {
            alert("Попробуйти позже, ещё раз");
          });
      }
      useEffect(() =>{
document.querySelector("#firstname-for-edit").value=`${data.firstname}`
document.querySelector("#lastname-for-edit").value=`${data.lastname}`
document.querySelector("#phone-for-edit").value=`${data.phone}`
      })
  return (
    <div className='big-div-edit-account'>
        <Navbar/>
        <h1>Manage Account</h1>
        <h3>Verify, edit and save your account info</h3>

    <div className="df-big-edit-account">
        <div className="first-edit-account">
            <p>First Name</p>
            <input type="text" id='firstname-for-edit'/>
            <p>Last Name</p>
            <input type="text" id='lastname-for-edit'/>
            <p>Email</p>
            <h3>{data.email}</h3>
            <p>Telephone</p>
            <input type="text" id='phone-for-edit'/><br />
            <h6>If you are having difficulty setting your information, please call our support department at :</h6>
            <h5>480-285-1600.</h5>
        </div>
        <div className="first-edit-account">
            <h2>Change Password</h2>
            <p>New Password</p>
            <input type="password" id='password-for-edit'/>
            <p>Confirm New Password</p>
            <input type="password" id='password-for-edit1'/>
            <div className="checkbox-edit-account">
                <input type="checkbox" />
                <p>Enable Two Factor Authentication (Recommended)</p>
            </div>
            <p>Two-factor authentication is an extra layer of security for your user ID designed to ensure that you're the only person who can access your account. By checking this box, we will send a security code to your email address on file. This code will be required to be entered during the login process, allowing us to verify you as the owner of the account.</p>
        <div className="button-save-edit-account">
        <button onClick={()=>edityouracc(data.id)}>SAVE</button>
        </div>

        </div>
    </div>

        <Footer/>
    </div>
  )
}
