import React from "react";
import "./header.css";
import mobile from "../icons/MOBILE-Recharge-blue-png.png";
import card from "../icons/card.png";
import homeloan from "../icons/homeloan.png";
import blogs from "../icons/blog.png";
import news from "../icons/news.png";
import promotion from "../icons/promotion.png";

const Header = () => {
  return (
    <div className="head">
      <div className="col-1">
        <div className="all">
          <img src={mobile} alt="" />
          <h5>MOBILE RECHRAGES</h5>
        </div>
        <div className="all">
          <img src={card} alt="" />
          <h5>DTH RECHARGES</h5>
        </div>
        <div className="all">
          <img src={homeloan} alt="" />
          <h5>LOANS</h5>
        </div>
        <div className="all">
          <img src={news} alt="" />
          <h5>NEWS</h5>
        </div>
        <div className="all">
          <img src={promotion} alt="" />
          <h5>PROMOTIONS</h5>
        </div>
        <div className="all">
          <img src={blogs} alt="" />
          <h5>BLOGS</h5>
        </div>
      </div>
    </div>
  );
};

export default Header;
