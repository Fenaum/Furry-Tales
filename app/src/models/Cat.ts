import { db } from "../../firebase/firebaseConfig";
import { collection } from "firebase/firestore";

export interface Cat {
  id: string;
  name: string;
  age: number;
  breed: string;
  color: string;
  weight: number;
  gender: string;
  personality: string[];
  vaccinations: Record<string, boolean>;
  owner: string;
  images: string[];
  location?: {
    latitude: number;
    longitude: number;
  };
  swipes: string[];
  matches: string[];
  match: boolean;
  bio: string;
}

export const catsCollection = collection(db, "Cats");
