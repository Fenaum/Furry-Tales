// Match Model

export interface Match {
  id: string; // Unique identifier for the match
  user: string; // Reference to the user ID involved in the match
  cat: string; // Reference to the cat ID involved in the match
  createdAt: Date; // Timestamp indicating when the match was created
}
