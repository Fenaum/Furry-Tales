"use client";

import { useEffect, useState } from "react";
import { onAuthStateChanged } from "../../lib/auth";
import useStore from "../../lib/zustandStore";
import CatCard from "../../components/CatCard/Card"

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
  const { isMenuOpen, toggleMenu } = useStore();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(setUser);

    // Clean up the listener on component unmount
    return () => unsubscribe();
  }, []);

  return (
    <div className="flex">
      <CatCard />
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
