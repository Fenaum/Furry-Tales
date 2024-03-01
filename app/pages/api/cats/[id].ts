import type { NextApiRequest, NextApiResponse } from "next";
import { db } from "../../../firebase/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import { Cat } from "../../../src/models/Cat";


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    try {
      const catId = req.query.id as string;
      const catDoc = doc(db, "Cats", catId);
      const catSnapshot = await getDoc(catDoc);

      if (catSnapshot.exists()) {
        const cat = catSnapshot.data() as Cat;
        res.status(200).json(cat);
      } else {
        res.status(404).json({ error: "Cat not found." });
      }
    } catch (error) {
      res.status(500).json({ error: "Failed to retrieve cat." });
    }
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
