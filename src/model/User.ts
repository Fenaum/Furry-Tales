export interface User {
  id: string;
  email: string;
  name: string;
  profilePicture?: string;
  role: "adopter" | "owner" | "admin" | "breeder";
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
  matches: string[];
  address: Address;
}

// Address.ts
export interface Address {
  street: string;
  city: string;
  state: string;
  zip: string;
  country: string;
}
