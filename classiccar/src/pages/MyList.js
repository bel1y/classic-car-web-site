import React, {useState, useEffect} from "react";
import "../css/mylist.css";
import Footer from "./Footer";
import Navbar from "./Nav";
import url from "./host";
import axios from "axios";

export default function MyList() {
  const [data, setData] = useState([]);
  const [data1, setData1] = useState(JSON.parse(localStorage.getItem("user")));

  useEffect(()=>{
    axios.get(`${url}/api/v1/cars`)
    .then(res=>{
      setData(res.data)
    })
    .catch(err=>{

    })
  },[])

  function openaddlisting() {
    window.location = '/add-listing'
  }

  return (
    <div className="big-div-my-list">
      <Navbar />
      <h1>Listing for: Private Seller</h1>
      <h3>Manage your saved vehicles.</h3>
      <div className="my-list-add-new-car-to-sell">
        <button className="button-add-new-new-listing" onClick={()=>openaddlisting()}>+ADD NEW LIST</button>
        <div className="input-fiter-add-new-div">
          <p>Filter By</p>
          <div className="input-fiter-add-new-div1">
            <input type="text" placeholder="Filter..." />
            <button>GO</button>
          </div>
        </div>
        <div className="input-fiter-add-new-div2">
          <p>Sort By</p>
          <select name="" id="">
            <option value="">Age</option>
            <option value="">Year</option>
            <option value="">Make/Model</option>
            <option value="">Price</option>
            <option value="">Status</option>
            <option value="">Total Views</option>
          </select>
        </div>
        <div className="input-fiter-add-new-div2">
          <p>Sorting Order</p>
          <select name="" id="">
            <option value="">Ascending</option>
            <option value="">Descending</option>
          </select>
        </div>
        <div className="input-fiter-add-new-div2">
          <p>Sorting Order</p>
          <select name="" id="">
            <option value="">25</option>
            <option value="">50</option>
            <option value="">100</option>
          </select>
        </div>
      </div>
      <h5>
        Items with a tan background are featured listings. Items with a silver
        background are listings requiring renewal.
      </h5>

      <div className="my-add-car-div-my-listing">
        {
          data.map((item,key)=>{
           if(item.user_id == data1.id){
            return <>
            <div className="big-div-for-my-add-listing">
              <div className="img-div-for-my-add-listing">
                <img src={item.image} alt="" />
              </div>
              <div className="text-div-for-my-add-listing">
                <div className="df-title-and-delete-edit">
                  <p>{item.year} {item.title}</p>
                  <button>Delete</button>
                </div>
                <div className="df-another-things-my-listing">
                  <div className="first-another-things-my-listing">
                    <p>Listing ID:</p>
                    <h6>CC-{item.id}</h6>
                    <p>Listed since:</p>
                    <h6>{item.time_create.slice(0,10)}</h6>
                    <p>Featured:</p>
                    <h6>No</h6>
                  </div>
                  <div className="first-another-things-my-listing">
                    <p>Package:</p>
                    <h6>Regular Listing</h6>
                    <p>Price:</p>
                    <h6>{item.price}</h6>
                    <p>Status:</p>
                    <h6>added</h6>
                  </div>
                  <div className="first-another-things-my-listing">
                    <p>View:</p>
                  <h5>Today: <b>0</b></h5>
                  <h5>Month: <b>0</b></h5>
                  <h5>Total: <b>{item.looking}</b></h5>
                  </div>
                </div>
              </div>
            <div className="for-button-in-media-my-add-listing">
              <button>Delete</button>
            </div>
            </div>
            </>
           }else{

           }
          })
        }
      </div>
      <Footer />
    </div>
  );
}
