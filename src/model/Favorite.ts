export interface Favorite {
  id: string; // Unique identifier for the favorite
  user: string; // Reference to the user ID who favorited the cat
  cat: string; // Reference to the cat ID that was favorited
  createdAt: Date; // Timestamp indicating when the cat was favorited
}
