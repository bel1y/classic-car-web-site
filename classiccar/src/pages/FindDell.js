import React, {useState, useEffect} from 'react'
import '../css/finsdell.css'
import Navbar  from './Nav'
import Footer from './Footer'
import axios from 'axios'
import url from './host'
import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet'

export default function FindDell() {
  const [data, setData] = useState([]);
  var [country, setCountry] = useState([]);
  var [state, setState] = useState([]);

  useEffect(() => {
 var a = [];
    axios.get(`${url}/api/v1/cars`)
      .then(res => {
          for (let i = 0; i < res.data.length; i++) {
            var push = true;
            for (let j = 0; j < a.length; j++) {
              if (a[j] == res.data[i].location) {
                push = false;
              }
            }
            if (push) {
              a.push(res.data[i].location);
            }
          }
          setCountry(a);
      })
      .catch(err => {

      })
      var b = [];
      axios.get(`${url}/api/v1/cars`)
        .then(res1 => {
            for (let i = 0; i < res1.data.length; i++) {
              var push = true;
              for (let j = 0; j < a.length; j++) {
                if (b[j] == res1.data[i].state) {
                  push = false;
                }
              }
              if (push) {
                b.push(res1.data[i].state);
              }
            }
            setState(b);
        })
        .catch(err => {
  
        })
  }, [])


  function open() {
    window.location = `/listings-find/1?lacotion=${document.querySelector("#country-in-find-dealers").value}
   `
  }

  return(
        <>
        <Navbar/>
            <div className="work">
      <div className="work_one">
        <h1>Find a Dealer</h1>
        <p>Search nationwide for top Classic Car dealers.</p>
      </div>
      <div className="work_two">
        <div className="waty_finddeal">
          <div className="lop_finddeal">
            <select className="select_finddeal" >
              <option value="">All Dealers</option>
             {country.map((item,key)=>{
             return <option value={`${item}`}>{item}</option>
             })}
            </select>
            <div className="scroll">
            {state.map((item,key)=>{
              return <p >{item}</p>
             })}
            </div>
          </div>  
          <iframe title=''
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52918450.40025156!2d-161.85240697328845!3d35.949761324666035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54eab584e432360b%3A0x1c3bb99243deb742!2z0KHQvtC10LTQuNC90LXQvdC90YvQtSDQqNGC0LDRgtGLINCQ0LzQtdGA0LjQutC4!5e0!3m2!1sru!2s!4v1716629711202!5m2!1sru!2s" 
          width={'600'}
          height="450" 
          style={{border: 0}}
          allowfullscreen="" 
          loading="lazy" 
          referrerpolicy="no-referrer-when-downgrade"></iframe>
           
        </div>
      </div>
      <div className="work_three">
        <div className="work_three_big">
          <div className="work_three_h1">
            <h1>List by State</h1>
          </div>
          <div className="work_three_card">
            <div className="work_three_card_small">
              <ul>
              {state.map((item,key)=>{
             if(item.length < 9){
              return <li>{item}</li>
             }
             else {

             }
             })}
              </ul>
            </div>
            <div className="work_three_card_small">
              <ul>
              {state.map((item,key)=>{
             if(item.length > 9 &&  item.length < 17){
              return <li>{item}</li>
             }
             else {

             }
             })}
              </ul>
            </div>
            <div className="work_three_card_small">
              <ul>
              {state.map((item,key)=>{
             if(item.length > 17 &&  item.length < 25){
              return <li>{item}</li>
             }
             else {

             }
             })}
              </ul>
            </div>
            <div className="work_three_card_small">
              <ul>
              {state.map((item,key)=>{
             if(item.length > 25 &&  item.length < 33){
              return <li>{item}</li>
             }
             else {

             }
             })}
              </ul>
            </div>
            <div className="work_three_card_small">
              <ul>
              {state.map((item,key)=>{
             if(item.length > 33 &&  item.length < 42){
              return <li>{item}</li>
             }
             else {

             }
             })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="katta">
      <div className="kart">
        <div className="kichkina_h1">
          <h1>List by Country</h1>
        </div>
        <div className="work_three_card">
            <div className="work_three_card_small">
              <ul id='location-in-find-dealers'>
              {country.map((item,key)=>{
             if(item.length < 9){
              return <li>{item}</li>
             }
             else {

             }
             })}
              </ul>
            </div>
            <div className="work_three_card_small">
              <ul id='location-in-find-dealers'>
              {country.map((item,key)=>{
             if(item.length > 9 &&  item.length < 17){
              return <li>{item}</li>
             }
             else {

             }
             })}
              </ul>
            </div>
            <div className="work_three_card_small">
              <ul>
              {country.map((item,key)=>{
             if(item.length > 17 &&  item.length < 25){
              return <li>{item}</li>
             }
             else {

             }
             })}
              </ul>
            </div>
            <div className="work_three_card_small">
              <ul>
              {country.map((item,key)=>{
             if(item.length > 25 &&  item.length < 33){
              return <li>{item}</li>
             }
             else {

             }
             })}
              </ul>
            </div>
            <div className="work_three_card_small">
              <ul>
              {country.map((item,key)=>{
             if(item.length > 33 &&  item.length < 42){
              return <li>{item}</li>
             }
             else {

             }
             })}
              </ul>
            </div>
          </div>
      </div>
    </div>
    <Footer/>
        </>

  )
}
