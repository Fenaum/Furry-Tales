// Message Model

export interface Message {
  id: string; // Unique identifier for the message
  sender: string; // Reference to the user ID of the sender
  recipient: string; // Reference to the user ID of the recipient
  content: string; // Content of the message
  createdAt: Date; // Timestamp indicating when the message was sent
  read: boolean; // Indicates whether the message has been read by the recipient
  attachment?: string; // Reference to any attachment (e.g., image, document) associated with the message
}
