// Review Model

export interface Review {
  id: string; // Unique identifier for the review
  user: string; // Reference to the user ID who wrote the review
  cat: string; // Reference to the cat ID being reviewed
  rating: number; // Rating given by the user for the cat
  comments?: string; // Optional comments or feedback provided by the user
  createdAt: Date; // Timestamp indicating when the review was created
}
