import React from 'react'
import Navbar from './pages/Navbar'
import Footer from './pages/Footer'
import Home from './pages/Home'
import Search from "./pages/Search";
import Sell from './pages/Sellacar'
import Auction from './pages/Auction'
import Inside from './pages/Inside';
import Inside1 from './pages/Inside1';
import Inside2 from './pages/Inside2';
import Inside3 from './pages/Inside3';
import Inside4 from './pages/Inside4';
import Inside5 from './pages/Inside5';
import Inside6 from './pages/Inside6';
import Resourse from './pages/Resourse'
import ResourseInside from './pages/ResourseInside';
import ResourseInside1 from './pages/ResourseInside1';
import ResourseInside2 from './pages/ResourseInside2';
import ResourseInside3 from './pages/ResourseInside3';
import ResourseInside4 from './pages/ResourseInside4';
import ResourseInside5 from './pages/ResourseInside5';
import ResourseInside6 from './pages/ResourseInside6';
import ResourseInside7 from './pages/ResourseInside7';
import Joinnetwork from './pages/Joinnetwork'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import FindDell from './pages/FindDell';
import AboutCar from './pages/AboutCar'
import Login from './pages/Signpage'
import Mylist from './pages/MyList'
import Myalert from './pages/Myalert'
import Buyerinq from './pages/Buyerinq';
import Edityouracc from './pages/Edityouracc';
import Favorites from './pages/Favorites';
import Inventoryanalytic from './pages/Inventoryanalytic';
import Nav from './pages/Navbar1'
import Result from './pages/Result';
import AddListing from './pages/AddListing';

export default function App() {
  return (
    <div>
      <BrowserRouter>
<Routes>
  <Route path="/" element={<Home/>} />
  <Route path="/add-listing" element={<AddListing/>} />
  <Route path="/listings-find/:id" element={<Result/>} />
  <Route path="/search" element={<Search/>}/>
  <Route path="/sell-a-car" element={<Sell/>}/>
  <Route path="/auction" element={<Auction/>}/>
  <Route path="/resourse" element={<Resourse/>}/>
  <Route path="/join-net-work" element={<Joinnetwork/>}/>
  <Route path="/find-dealers" element={<FindDell/>} />
  <Route path="/about-car/:id" element={<AboutCar/>}/>
  <Route path="/login" element={<Login/>} />
  <Route path="/my-list" element={<Mylist/>} />
  <Route path="/my-alert" element={<Myalert/>} />
  <Route path="/Buyer" element={<Buyerinq/>} />
  <Route path="/manage-account" element={<Edityouracc/>} />
  <Route path="/favorites" element={<Favorites/>} />
  <Route path="/inventory-analytic" element={<Inventoryanalytic/>} />
  <Route path="/auction-inside" element={<Inside/>} />
  <Route path="/auction-inside-1" element={<Inside1/>} />
  <Route path="/auction-inside-2" element={<Inside2/>} />
  <Route path="/auction-inside-3" element={<Inside3/>} />
  <Route path="/auction-inside-4" element={<Inside4/>} />
  <Route path="/auction-inside-5" element={<Inside5/>} />
  <Route path="/auction-inside-6" element={<Inside6/>} />
  <Route path="/resourse-inside" element={<ResourseInside/>} />
  <Route path="/resourse-inside-1" element={<ResourseInside1/>} />
  <Route path="/resourse-inside-2" element={<ResourseInside2/>} />
  <Route path="/resourse-inside-3" element={<ResourseInside3/>} />
  <Route path="/resourse-inside-4" element={<ResourseInside4/>} />
  <Route path="/resourse-inside-5" element={<ResourseInside5/>} />
  <Route path="/resourse-inside-6" element={<ResourseInside6/>} />
  <Route path="/resourse-inside-7" element={<ResourseInside7/>} />
</Routes>
</BrowserRouter>
    </div>
  )
}

