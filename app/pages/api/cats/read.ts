import type { NextApiRequest, NextApiResponse } from "next";
import { db } from "../../../firebase/firebaseConfig"
import { collection, getDocs } from "firebase/firestore";
import { Cat } from "../../../src/models/Cat"; // 


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    try {
      const catsCollection = collection(db, "Cats");
      const querySnapshot = await getDocs(catsCollection);

      // Map over the documents in the snapshot and convert them to JavaScript objects
      const cats = querySnapshot.docs.map((doc) => doc.data() as Cat);

      res.status(200).json(cats);
    } catch (error) {
      res.status(500).json({ error: "Failed to retrieve cats." });
    }
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
