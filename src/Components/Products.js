import React from "react";
import food from "../icons/food.png";
import education from "../icons/education.png";
import events from "../icons/event.png";
import "./header.css";

const Products = () => {
  return (
    <>
      <div className="products">
        <h2>All Products</h2>
        <div className="cont-img">
          <img src={food} alt="" />
          <img src={education} alt="" />
          <img src={events} alt="" />
        </div>
      </div>
    </>
  );
};

export default Products;
