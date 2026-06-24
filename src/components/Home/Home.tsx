"use client";

import Link from "next/link";
import CardContainer from "../ui/catCard/CardContainer";
import HeroCard from "../ui/HeroCard/HeroCard";
import Testimonies from "../Testimonies/Testimonies";
import "./home.css";

const Home = () => {
  return (
    <div className="home-page">
      <HeroCard />
      <section className="breeder-discovery" aria-labelledby="breeder-heading">
        <div className="promotion">
          <p className="section-kicker">Curated breeder discovery</p>
          <h2 id="breeder-heading">Compare cats, programs, and care standards</h2>
          <p>
            Browse available cats from reputable breeders, review temperament
            notes, and start informed conversations about health records,
            availability, and upcoming litters.
          </p>
          <div className="trust-grid">
            <span>Health records</span>
            <span>Local breeders</span>
            <span>Litter updates</span>
          </div>
          <Link href="/explore" className="explore-button">
            Explore breeders
          </Link>
        </div>
        <CardContainer />
      </section>
      <Testimonies />
    </div>
  );
};

export default Home;
