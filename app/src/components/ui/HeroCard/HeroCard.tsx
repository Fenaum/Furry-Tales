"use client"
import Button from "../buttons/Button"
import Image from "next/image"
import "./hero.css"
import images from "../../../../constants"

const heroBanner = images.heroBanner;

function HeroCard() {
  const handleClick = () => {
    console.log("Button clicked")
  }

  return (
    <div className="hero-card">
        <Image src={heroBanner} alt="Hero Banner" className="hero-image"></Image>
        <div className="hero-content">
          <h4>Hello</h4>
          <h1>Adopting Event</h1>
          <p>Adoptin a cat today. Sign up soon.</p>
          <div className="btn-container">
            <Button 
              onClick={handleClick}
              buttonLabel="Search Now"
              className="btn-primary font-light"
            />
          </div>
        </div>
    </div>
  )
}

export default HeroCard