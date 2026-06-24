// Breeder Inquiry

export interface BreederInquiry {
  id: string; // Unique identifier for the breeder inquiry
  user: string; // Reference to the user ID making the inquiry
  cat: string; // Reference to the cat ID being discussed
  status: "pending" | "approved" | "rejected"; // Current status of the breeder inquiry
  message: string; // Optional message from the buyer to the breeder
  createdAt: Date; // Timestamp indicating when the inquiry was created
  updatedAt: Date; // Timestamp indicating the last update to the inquiry status
  breeder?: string; // Reference to the breeder responsible for processing the inquiry
  contactInfo?: {
    email?: string; // Email address of the user making the inquiry
    phone?: string; // Phone number of the user making the inquiry
  };
  reason?: string; // Reason for the breeder inquiry provided by the user
  applicationForm?: string; // Reference to the submitted application form or additional information
  notes?: string; // Internal notes or comments regarding the inquiry
  attachments?: string[]; // References to any documents or attachments submitted with the request
  review?: {
    rating?: number; // Rating given by the breeder based on the inquiry
    comments?: string; // Comments or feedback provided by the breeder
  };
  history?: {
    timestamp: Date; // Timestamp of the action taken on the inquiry
    action: string; // Description of the action taken (e.g., status change, communication)
    user?: string; // Reference to the user responsible for the action (e.g., breeder or buyer)
  }[];
}
