"use client";

import { useRouter } from "next/navigation";
import { signOut } from "../../../utils/auth";
import { getAuth } from "firebase/auth";

export default function Profile() {
  const auth = getAuth();
  const user = auth.currentUser;
  const router = useRouter();

  if (user) {
    const userId = user.uid;
    // Make a request to the API route with the user ID
    fetch(`/api/profile/${userId}`)
      .then((response) => response.json())
      .then((userProfile) => {
        return userProfile;
        // Handle the user profile data
      })
      .catch((error) => {
        console.error(error);
        return null;
        // Handle the error
      });
  } else {
    // User is not signed in
    console.log("User is not signed in");
    router.push("/user/signin");
  }

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
      {user && (
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
      )}
    </>
  );
}
