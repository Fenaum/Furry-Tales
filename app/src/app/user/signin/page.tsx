"use client";

import { useRouter } from "next/navigation";
import "../user.css";
import { signInWithGoogle } from "../../../lib/auth"; // Import the Google Sign-In function
import { getAuth } from "firebase/auth";

export default function Register() {
  const router = useRouter();
  const auth = getAuth();
  const user = auth.currentUser;
  // If the user is already signed in, redirect to the home page or dashboard
  if (user) {
    router.push("/user/profile");
  }
  // Sign in with Google

  const handleSignUpWithGoogle = async () => {
    try {
      const user = await signInWithGoogle();
      console.log("User signed up with Google:", user);
      // Redirect to the home page or dashboard after successful sign-up
      router.push("/user/profile");
    } catch (error) {
      console.error("Error signing up with Google:", error);
      // Handle error, e.g., show an error message to the user
    }
  };

  return (
    <div className="form-container">
      <div className="form-card">
        <h2 className="form-title">Welome!</h2>
        <button className="form-button" onClick={handleSignUpWithGoogle}>
          Sign in with Google
        </button>
      </div>
    </div>
  );
}
