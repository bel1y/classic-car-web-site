import React from 'react';
import Nav from './Nav';
import Footer from './Footer';
import '../css/sendfriend.css';

export default function SendFriend() {
  return (
    <div>
        <Nav/>
        <header className='header-send-to-friend'>
            <h1>Email Vehicle to a Friend</h1>
            <h3>Tell a friend you found the car of their dreams!</h3>
        </header>
        <section className='section-send-to-friend'>
            <div className="text-and-input-for-send-message-to-friend">
                <p>Your Name:</p>
                <input type="text" name="" id="" />
            </div>
            <div className="text-and-input-for-send-message-to-friend">
                <p>Your Address:</p>
                <input type="text" name="" id="" />
            </div>
            <div className="text-and-input-for-send-message-to-friend">
                <p>Friend's Name:</p>
                <input type="text" name="" id="" />
            </div>
            <div className="text-and-input-for-send-message-to-friend">
                <p>Friend's Address:</p>
                <input type="text" name="" id="" />
            </div>
            <div className="text-and-input-for-send-message-to-friend">
                <p>Your Message:</p>
                <textarea type="text" name="" id="" />
            </div>
            <div className="text-and-input-for-send-message-to-friend">
                <p></p>
                <button>SEND MESSAGE</button>
            </div>
        </section>

        <Footer/>
    </div>
  )
}
