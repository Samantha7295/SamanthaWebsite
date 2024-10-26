import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark_arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
      <div className = "hero-text">
        <h1> Hi, my name is Samantha La!</h1>
        <p> 🌟Welcome to My Creative Space 🌟 </p>
        <p>Get to know me and explore where innovation meets creativity!</p>
        <p>Feel free to look around, and don’t hesitate to reach out.</p>
        {/* <button className='btn'>Explore More <img src={dark_arrow} alt=""/></button> */}
      </div>
    </div>
  )
}

export default Hero
