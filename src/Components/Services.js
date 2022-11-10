import React from 'react'
import home from '../icons/home.png'
import bestquality from '../icons/best-quality.png'
import sportsgoods from '../icons/sports-goods.png'
import './header.css'

const Services = () => {
  return (
    <>
    <div className="products">
      <h2>All Services</h2>
      <div className="cont-img">
        <img src={home} alt="" />
        <img src={bestquality} alt="" />
        <img src={sportsgoods} alt="" />
      </div>

    </div>
    </>
  )
}

export default Services