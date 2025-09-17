import React from 'react'
import "./Hero.css"
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from "react-icons/io";
import { MdKeyboardArrowLeft,  MdKeyboardArrowRight } from "react-icons/md";

const Hero = () => {
  return (
    <div className='Hero-body'>
      <div className='Hero-wrapper'>
        <article className='Hero-left'>
          <p style={{color: "red"}}><span>
           Get Started Unique Affordable Wears
            </span>
            <button>
              Buy Now
            </button>
            </p>
         
        </article>
        <div className='Hero-right'>
        <button className='Button'>
        < MdKeyboardArrowLeft className='click-icon' />
        </button>
        <div className='Product-Display'>
          <img src='public/Image/heels-removebg-preview.png'/>
          </div>
          <button className='Button'>
            < MdKeyboardArrowRight className='click-icon' />
          </button>
          </div>
      </div>
    </div>
  )
}

export default Hero
