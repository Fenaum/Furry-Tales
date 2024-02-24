import { collection } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";

export interface User {
  id: string;
  username: string;
  email: string;
  password: string; // Note: This should be handled securely in a real application
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
