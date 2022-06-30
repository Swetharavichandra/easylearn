import React from "react"
import Heading from "../../common/heading/Heading"
import "./Hero.css"

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <div className='row'>
            <Heading subtitle='WELCOME TO EASYLEARN' title="INDIA'S NO:1 LEARNING PLATFORM" />
            <p><b>Get there. From here.</b>
Chart your path to success.</p>
          
          </div>
        </div>
      </section>
      <div className='margin'></div>
    </>
  )
}

export default Hero
