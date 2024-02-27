import { collection } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";

export interface User {
  id: string;
  email: string;
  name: string;
  profilePicture?: string;
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
}

export const userProfilesCollection = collection(db, "UserProfiles");
