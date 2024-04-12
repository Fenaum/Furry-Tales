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
  owner: UserId;
  images: string[];
  location?: {
    latitude: number;
    longitude: number;
  };
  matches: string[];
  bio: string;
  adoptionStatus: AdoptionStatus;
}

export enum AdoptionStatus {
  Available = "Available",
  Adopted = "Adopted",
  Pending = "Pending",
}

export type UserId = string;