import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";

export const auth = getAuth();

interface UserCredentials {
  email: string;
  password: string;
}

export async function signInUser({ email, password }: UserCredentials) {
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

export async function signOutUser() {
  try {
    await signOut(auth);
  } catch (error) {
    console.error("Error signing out", error);
    throw error;
  }
}