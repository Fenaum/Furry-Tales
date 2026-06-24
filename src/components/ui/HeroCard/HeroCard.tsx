"use client";
import Button from "../buttons/Button";
import Image from "next/image";
import "./hero.css";
import images from "../../../../constants";

const heroBanner = images.heroBanner;

function HeroCard() {
  const handleClick = () => {
    console.log("Search breeders");
  };

  return (
    <section className="hero-card" aria-label="Cat breeder marketplace">
      <Image
        src={heroBanner}
        alt="A cat resting comfortably"
        className="hero-image"
        priority
      />
      <div className="hero-content">
        <p className="hero-eyebrow">Verified breeder marketplace</p>
        <h1>Find the right breeder before you choose your next cat</h1>
        <p>
          Compare available cats, breeder programs, health details, and litter
          availability in one focused place.
        </p>
        <div className="btn-container">
          <Button
            onClick={handleClick}
            buttonLabel="Search breeders"
            className="hero-action"
          />
        </div>
      </div>
    </section>
  );
}

export default HeroCard;
