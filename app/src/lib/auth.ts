import { auth } from "../../firebase/firebaseConfig"; // import your firebase instance
import {
  signInWithEmailAndPassword,
  signOut,
  createUserWithEmailAndPassword,
} from "firebase/auth";

interface LoginCredentials {
  email: string;
  password: string;
}

interface registerCredentials {
  email: string;
  password: string;
  confirmPassword: string;
}

export async function signInUser({ email, password }: LoginCredentials) {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    return userCredential.user;
  } catch (error) {
    console.error("Error signing in with password and email", error);
    throw error;
  }
}

export async function signUpUser({
  email,
  password,
  confirmPassword,
}: registerCredentials) {
  if (password !== confirmPassword) {
    throw new Error("Passwords do not match");
  }

  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    return userCredential.user;
  } catch (error) {
    console.error("Error signing up with password and email", error);
    throw error;
  }
}

export async function signOutUser() {
  try {
    await signOut(auth);
  } catch (error) {
    console.error("Error signing out", error);
    throw error;
  }
}