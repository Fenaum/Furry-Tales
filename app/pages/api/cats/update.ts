import { NextApiRequest, NextApiResponse } from "next";
import { db } from "../../../firebase/firebaseConfig";
import { doc, getDoc, updateDoc } from "firebase/firestore";

// define API Route
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query;
  const docRef = doc(db, "Cats", id as string);
  const newCat = req.body;

  // Check if ID is provided
  if (!id) {
    return res.status(400).json({ message: "ID is required" });
  }

  if (req.method === "PUT") {
    try {
      // Fetch the document to check if the fields exist
      const docSnapshot = await getDoc(docRef);
      if (!docSnapshot.exists()) {
        return res.status(404).json({ message: "Cat not found" });
      }

      // Check if the fields to update exist in the document
      const docData = docSnapshot.data();
      if (!docData) {
        return res.status(400).json({ message: "No data found for this cat" });
      }

      // Perform the update only if the fields exist
      const fieldsToUpdate = Object.keys(newCat);
      const validFields = fieldsToUpdate.every((field) =>
        docData.hasOwnProperty(field)
      );
      if (!validFields) {
        return res
          .status(400)
          .json({ message: "One or more fields do not exist" });
      }

      await updateDoc(docRef, newCat);
      console.log(`This item has been updated`, newCat, docRef.path); // Use JSON.stringify for logging
      res.status(200).json(newCat);
    } catch (error) {
      // Log the error for debugging purposes
      console.error(`Error updating cat: ${error}`);
      // Send a generic error message to the client
      res.status(500).json({
        message: "Failed to update this item",
        error: "An error occurred while updating the cat.",
      });
    }
  } else {
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
