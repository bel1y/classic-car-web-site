import React, {useEffect, useState} from 'react'
import Navbar from './Nav'
import Footer from './Footer'
import '../css/favorite.css'
import car from '../img/car.jpg'
import { MdDelete } from "react-icons/md";
import axios from 'axios'
import url from './host'

export default function Favorites() {
    const [data, setData] = useState([]);
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

    useEffect(()=>{

        axios.get(`${url}/api/v1/favorite/${user.id}`)
        .then(res=>{
          setData(res.data)
          console.log(res.data);
        })
        .catch(err=>{
        
        })
      },[])

      function deletefavorite(id) {
        axios.delete(`${url}/api/v1/favorite/${id}`)
        .then(res=>{
            axios.get(`${url}/api/v1/favorite/${user.id}`)
        .then(res=>{
          setData(res.data)
          console.log(res.data);
        })
        .catch(err=>{
        
        })
        })
        .catch(err=>{
            alert(err)
        })
      }


  return (
    <div className='big-div-favorite-page'>
        <Navbar/>
        <h1>Your Favorites</h1>
        <h3>Here's the collection of your favorite classic cars.</h3>
        {data.map(item=>{
        return <div className="div-big-favorite-df">
        <div className="first-img-favorites-div">
            <img src={item.image} alt="" />
        </div>
        <div className="first-text-favorites-div">
            <div className="inside-little-favorites-div">
                <p>Featured Private Seller</p>
                <span>CC-{item.id}</span>
            </div>
            <h4>{item.year} {item.title}</h4>
            <p>{item.description}</p>
        <div className="df-delete-and-price-favorites">
            <p onClick={()=>deletefavorite(item.id1)}><MdDelete className='MdDelete-favorite'/> DEL</p>
            <h5>${item.price}</h5>
        </div>
        </div>
    </div>

        })}
        <Footer/>
    </div>
  )
}
