import React from "react";
import "../css/resourse.css";
import { MdArrowBackIosNew } from "react-icons/md";
import { FaGlobe } from "react-icons/fa";
import { RiDoubleQuotesL } from "react-icons/ri";
import Navbar from "./Nav";
import Footer from "./Footer";
import comment from "../img/comment.png";
import comment1 from "../img/comment1.png";

export default function ResourseInside() {
  function back() {
    window.location = "/resourse";
  }
  return (
    <div>
      <Navbar />
      <header className="header-resourse">
        <div className="header-text-resourse">
          <h1>Resource Guide</h1>
          <h3>
            Find your resources for finance, inspection, shipping and much more.
          </h3>
        </div>
      </header>
      <section className="first-section-inside">
        <p onClick={() => back()}>
          <MdArrowBackIosNew /> Return to Resource Guide
        </p>
        <h1>Catalog Resources</h1>
        <h6>
          Whether you're a seasoned collector, or just starting out, if you own
          a classic car, you're going to need parts. These companies provide
          parts catalogs; parts available on request.
        </h6>
      </section>
      <hr className="hr-for-resourse-inside" />

      {/* <section className="second-section-inside">
        <div className="comment-div-resourse-inside">
            <div className="img-comment-resourse">
                <img src={comment} alt="" />
            </div>
            <div className="text-comment-resourse">
                <h2>JJ Best Banc</h2>
                <p>The largest Automobile Lender of its type in the country, J. J. BEST BANC & CO. is recognized by Antique, Classic, Exotic, Muscle, Hot Rod and Sports car enthusiasts and dealers as the leader in the Classic Car automobile finance industry. Offering long terms and low rates, financing is available for most model cars ranging from 1900 to today. With the most knowledgeable staff available and loan approvals as fast as 5 minutes, J. J. BEST BANC & CO. will help you drive the dream. Call us at 1-800-USA-1965, where one of our friendly and knowledgeable classic car specialists will submit your loan for our 2-minute approval process.</p>
            <div className="df-visit-web-side-resourse">
                <p><FaGlobe /> Visit Website</p>
                <p><RiDoubleQuotesL /> 1-800-USA-1965</p>
            </div>
            </div>
        </div>
        <hr className='hr-for-resourse-inside1'/>
        <div className="comment-div-resourse-inside">
            <div className="img-comment-resourse">
                <img src={comment1} alt="" />
            </div>
            <div className="text-comment-resourse">
                <h2>Woodside Credit</h2>
                <p>"Pursue your passion with Woodside’s purpose-built loan program, home to the Lowest Payments in America! With 20 years of experience and $3 billion in loans funded, Woodside is the go-to lender for collector car lovers across the country. Woodside provides secured auto loans with no prepayment penalties and no balloon payments. Woodside Credit is the exclusive loan provider for Barrett-Jackson auctions and is available wherever you find your next ride, including Classiccars.com. Start with a no-obligation Quick Quote, or speak to a loan expert today at 888-744-3959."</p>
            <div className="df-visit-web-side-resourse">
                <p><FaGlobe /> Visit Website</p>
                <p><RiDoubleQuotesL /> Get a Quick Quote</p>
            </div>
            </div>
        </div>
        <hr className='hr-for-resourse-inside1'/>
    </section> */}
      <div className="for-span-section-resourse">
        <span>
          This page contains affiliate links and ClassicCars.com may be
          compensated if you make a purchase through these links.
        </span>
      </div>

      <Footer />
    </div>
  );
}
