import { collection } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";

export interface User {
  id: string;
  email: string;
  name: string;
  profilePicture?: string;
  role: "adopter" | "owner" | "admin";
  age?: number;
  gender?: "male" | "female";
  bio?: string;
  location?: {
    latitude: number;
    longitude: number;
  };
  catsOwned: string[]; // Array of cat IDs
  contactInfo?: {
    phoneNumber: string;
  };
  preferences?: {
    preferredBreeds: string[];
    notificationSettings: {
      email: boolean;
      pushNotifications: boolean;
    };
  };
  dateJoined: Date;
  lastActive: Date;
  swipes: string[];
  matches: string[];
  match: boolean;
}

export const userProfilesCollection = collection(db, "UserProfiles");
