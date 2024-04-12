import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { db, auth } from "./firebase/firebaseConfig"; // import your firebase instance
import { collection, doc, setDoc } from "firebase/firestore";

export async function signInWithGoogle() {
  const provider = new GoogleAuthProvider();

  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    console.log("User signed in:", user); // Debugging line

    const userProfilesCollection = collection(db, "UserProfiles");
    const userProfileDoc = doc(userProfilesCollection, user.uid);

    console.log(user.uid, "Attempting to update user profile in Firestore"); // Before setDoc

    await setDoc(
      userProfileDoc,
      {
        id: user.uid,
        email: user.email,
        name: user.displayName || "",
        profilePicture: user.photoURL || "",
      },
      { merge: true }
    )
      .then(() => {
        console.log("User profile updated in Firestore successfully"); // Success message
      })
      .catch((error) => {
        console.error("Error updating user profile in Firestore:", error);
        throw error; // Rethrow the error to catch it elsewhere if needed
      });

    console.log("User profile update operation completed"); // After setDoc

    return user;
  } catch (error) {
    console.error("Error signing in with Google:", error);
    throw error;
  }
}

export async function signOut() {
  try {
    await auth.signOut();
    console.log("User signed out");
  } catch (error) {
    console.error("Error signing out:", error);
    throw error;
  }
}

export function onAuthStateChanged(callback: (user: any | null) => void) {
  return auth.onAuthStateChanged(callback);
}
