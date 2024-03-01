"use client"

import { useRouter } from "next/navigation";  
import { signOut } from '../../../lib/auth'
import { getAuth } from "firebase/auth";

const auth = getAuth();
const user = auth.currentUser;

if (user) {
  const userId = user.uid;
  // Make a request to the API route with the user ID
  fetch(`/api/profile/${userId}`)
    .then((response) => response.json())
    .then((userProfile) => {
      // Handle the user profile data
    })
    .catch((error) => {
      // Handle the error
    });
} else {
  // User is not signed in
}

export default function Profile() {
      const router = useRouter();

    
    async function logout() {
        await signOut();
        console.log("logged out");
        router.push("/");
    }

    const handleLogout = () => {
        logout()
    }

    return (
        <div>
            <button onClick={handleLogout}>Log out</button>
        </div>
    )
}