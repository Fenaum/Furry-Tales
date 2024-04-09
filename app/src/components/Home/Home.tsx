"use client";

import { useEffect, useState } from "react";
import { onAuthStateChanged } from "../../lib/auth";
import CardContainer from "../ui/CatCard/CardContainer";
import HeroCard from "../ui/HeroCard/HeroCard";

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
    <div className="flex-col mx-auto">
      <h1 className="text-2xl font-light mb-5">Welcome to Furry Tale!</h1>
      <HeroCard />
      <div className="flex my-10">
        <div>
          <h2 className="text-xl font-light mb-5">Featured Cats</h2>
          <p>This section will display a list of featured cats from the database.</p>
        </div>
        <CardContainer />
      </div>
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
