export interface Cat {
  id: string;
  name: string;
  age: number;
  breed: string;
  breedDescription?: string;
  color: string;
  weight: number;
  gender: string;
  personality: string[];
  characteristics?: string[];
  vaccinations: Record<string, boolean>;
  healthNotes?: string[];
  parents?: {
    mother: string;
    father: string;
    notes?: string;
  };
  owner: UserId;
  images: string[];
  location?: {
    latitude: number;
    longitude: number;
  };
  matches: string[];
  bio: string;
  availabilityStatus: AvailabilityStatus;
}

export enum AvailabilityStatus {
  Available = "Available",
  Reserved = "Reserved",
  Pending = "Pending",
}

export type UserId = string;
