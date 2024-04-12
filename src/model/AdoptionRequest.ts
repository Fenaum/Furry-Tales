// Adoption Request

export interface AdoptionRequest {
  id: string; // Unique identifier for the adoption request
  user: string; // Reference to the user ID making the request
  cat: string; // Reference to the cat ID being adopted
  status: "pending" | "approved" | "rejected"; // Current status of the adoption request
  message: string; // Optional message from the user to the cat owner or adoption agency
  createdAt: Date; // Timestamp indicating when the request was created
  updatedAt: Date; // Timestamp indicating the last update to the request status
  agency?: string; // Reference to the adoption agency or owner responsible for processing the request
  contactInfo?: {
    email?: string; // Email address of the user making the request
    phone?: string; // Phone number of the user making the request
  };
  reason?: string; // Reason for the adoption request provided by the user
  applicationForm?: string; // Reference to the submitted application form or additional information
  notes?: string; // Internal notes or comments regarding the request
  attachments?: string[]; // References to any documents or attachments submitted with the request
  review?: {
    rating?: number; // Rating given by the adoption agency/owner based on the request
    comments?: string; // Comments or feedback provided by the adoption agency/owner
  };
  history?: {
    timestamp: Date; // Timestamp of the action taken on the request
    action: string; // Description of the action taken (e.g., status change, communication)
    user?: string; // Reference to the user responsible for the action (e.g., adoption agency/owner)
  }[];
}
