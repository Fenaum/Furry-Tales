import { FunctionSquareIcon } from "lucide-react";
import { auth } from "../../firebase/firebaseConfig"; // import your firebase instance
import {
  signInWithEmailAndPassword,
  signOut,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  User
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
  const currentUser = await getCurrentUser();
  if (currentUser) {
    throw new Error("User is already signed in");
  }

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
  const currentUser = await getCurrentUser();
  if (currentUser) {
    throw new Error("There is already a user signed in. Please log out first.");
  }

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

export function listenForAuthChanges(
  callback: (user: User | null) => void
) {
  onAuthStateChanged(auth, callback);
}

export async function getCurrentUser(): Promise<User | null> {
  return auth.currentUser;
}
export async function getIdToken(): Promise<string> {
  const user = await getCurrentUser();
  if (!user) {
    throw new Error("No user is currently signed in");
  }
  return user.getIdToken();
}