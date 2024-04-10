"use client";

import { useEffect, useState } from "react";
import { onAuthStateChanged } from "../../lib/auth";
import CardContainer from "../ui/CatCard/CardContainer";
import HeroCard from "../ui/HeroCard/HeroCard";
import Testimonies from "../Testimonies/Testimonies";
import "./home.css"

// Define the type for the user object
interface User {
  uid: string;
  email: string;
  displayName?: string;
  photoURL?: string;
  // Add other fields as needed
}

const Home = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(setUser);

    // Clean up the listener on component unmount
    return () => unsubscribe();
  }, []);

  return (
    <div className="flex-col mx-auto justify-center items-center">
      <h1 className="text-2xl font-light mb-5 mx-5">Welcome to Furry Tale!</h1>
      <HeroCard />
      <div className="flex my-10 justify-around items-center">
        <div className="promotion mx-20">
          <h2 className="text-xl font-light mb-5">
            Explore Your Favorite Cats
          </h2>
          <p>
            Discover your purr-fect match by connecting with reputable breeders
            in your area. Whether you're searching for a playful kitten or a
            cuddly companion, Furry Tale brings you closer to finding the ideal
            furry friend to enrich your life.
          </p>
          <button className="btn btn-primary mt-5">Explore</button>
        </div>
        <CardContainer />
      </div>
      <Testimonies />
    </div>
  );
};

// const Home = () => {
//   if (user) {
//     return <div>Welcome, {user.email}!</div>;
//   } else {
//     return <div>Please log in.</div>;
//   }
// };

export default Home;
