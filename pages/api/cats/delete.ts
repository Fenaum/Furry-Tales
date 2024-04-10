// Import necessary modules and types
import { NextApiRequest, NextApiResponse } from "next";
import { db } from "../../../firebase/firebaseConfig";
import { deleteDoc, doc } from "firebase/firestore";

// Define the API route handler
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query;

  if (!id) {
    return res.status(400).json({ message: "ID is required" });
  }

  if (req.method === "DELETE") {
    try {
      const docRef = doc(db, "Cats", id as string);
      console.log("Deleting document:", docRef.path); // Log the document path
      await deleteDoc(docRef);
      console.log("Cat deleted");
      res.status(200).json({ message: "Cat deleted" });
    } catch (error) {
      const err = error as Error;
      console.error("Error deleting cat:", err.message); // Log the error message
      res
        .status(500)
        .json({ message: "Error deleting cat", error: err.message });
    }
  } else {
    res.setHeader("Allow", ["DELETE"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
