import type { NextApiRequest, NextApiResponse } from "next";
import { db } from "../../../src/utils/firebase/firebaseConfig";
import { getDoc, doc } from "firebase/firestore";

// /api/profile/[id]
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    try {
      const userId = req.query.id as string;
      const userDoc = doc(db, "UserProfiles", userId);
      const userSnapshot = await getDoc(userDoc);

      if (userSnapshot.exists()) {
        const user = userSnapshot.data();
        res.status(200).json(user);
      } else {
        res.status(404).json({ message: "User profile not found" });
      }
    } catch (error) {
      res.status(500).json({ error: "Failed to retrieve user profile" });
    }
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
