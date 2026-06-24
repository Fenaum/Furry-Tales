"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { signOut } from "../../../utils/auth";
import { getAuth, User } from "firebase/auth";

export default function Profile() {
  const auth = getAuth();
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      if (!currentUser) {
        router.push("/user/signin");
        return;
      }

      setUser(currentUser);

      fetch(`/api/user/profile?id=${currentUser.uid}`)
        .then((response) => response.json())
        .catch((error) => {
          console.error(error);
          return null;
        });
    });

    return () => unsubscribe();
  }, [auth, router]);

  async function logout() {
    await signOut();
    console.log("logged out");
    router.push("/");
  }

  const handleLogout = () => {
    logout();
  };

  return (
    <>
      {user ? (
        <div>
          <div>
            <h1>Profile</h1>
            <p>User ID: {user.uid}</p>
            <p>Email: {user.email}</p>
            <p>Display name: {user.displayName}</p>
            <p>Photo URL: {user.photoURL}</p>
          </div>
          <button onClick={handleLogout}>Log out</button>
        </div>
      ) : (
        <div>Loading profile...</div>
      )}
    </>
  );
}
