import React from 'react'
import '../css/buyerinq.css'
import Navbar from './Nav'
import Footer from './Footer'

export default function Buyerinq() {
  return (
    <div className='big-div-buer-inq'>
        <Navbar/>
        <h1>Buyer Inquiries for: <span>Private Seller</span></h1>
        <h3>Leads - keep track of who's b   een asking about your vehicles.</h3>
    <div className="select-search-div-buyer">
        <div className="first-select-search-div-buyer">
            <p>Selected Month</p>
            <select name="" id="">
                <option value=""></option>
            </select>
        </div>
        <div className="first-select-search-div-buyer">
            <p>Sort By</p>
            <select name="" id="">
                <option value="">Listing Id</option>
                <option value="">Inquiry Date</option>
                <option value="">Email Address</option>
            </select>
        </div>
        <div className="first-select-search-div-buyer">
            <p>Sorting Order</p>
            <select name="" id="">
                <option value="">Ascending</option>
                <option value="">Descending</option>
            </select>
        </div>
        <div className="first-select-search-div-buyer">
            <p>Results Per Page</p>
            <select name="" id="">
                <option value="">25</option>
                <option value="">50</option>
                <option value="">100</option>
            </select>
        </div>
    </div>
    <table className='table-in-buyer-inq'>
        <tr>
            <th className='th-in-table-buyer-inq1 th-in-table-buyer-inq'>Vehicle</th>
            <th className='th-in-table-buyer-inq'>Inquiry Date</th>
            <th className='th-in-table-buyer-inq'>Email Address</th>
            <th className='th-in-table-buyer-inq'>Phone</th>
            <th className='th-in-table-buyer-inq2'>Message</th>
        </tr>
    </table>
    <Footer/>
    </div>
  )
}
