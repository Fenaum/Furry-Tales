import type { NextApiRequest, NextApiResponse } from "next";
import { db } from "../../../firebase/firebaseConfig";
import { collection, query, where, getDocs } from "firebase/firestore";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const { name } = req.query;

    if (!name) {
      return res.status(400).json({ message: "Name is required for search." });
    }

    try {
      const catsCollection = collection(db, "Cats");
      const q = query(catsCollection, where("name", "==", name));
      const querySnapshot = await getDocs(q);

      const cats = querySnapshot.docs.map((doc) => doc.data());
      res.status(200).json(cats);
    } catch (error) {
      res.status(500).json({ error: "Failed to search for cats." });
    }
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
