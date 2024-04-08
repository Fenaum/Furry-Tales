"use client";

import { useEffect, useState } from "react";
import { onAuthStateChanged } from "../../lib/auth";
import CardContainer from "../ui/CatCard/CardContainer";

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
    <div className="flex">
      <CardContainer />
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
