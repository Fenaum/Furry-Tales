import type { NextApiRequest, NextApiResponse } from "next";
import { Cat } from "../../../src/models/Cat";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../../firebase/firebaseConfig";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const newCat: Cat = req.body; // Assuming the request body is properly typed
    // Validate and process the newCat object...
    try {
      const docRef = await addDoc(collection(db, "Cats"), newCat);
      res
        .status(200)
        .json({ message: "Cat created successfully.", id: docRef.id });
    } catch (error) {
      res.status(500).json({ error: "Error creating cat." });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
