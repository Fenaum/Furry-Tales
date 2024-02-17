import type { NextApiRequest, NextApiResponse } from "next";
import { db } from "../../../firebase/firebaseConfig";
import { collection, query, where, getDocs } from "firebase/firestore";
import { Cat } from "../../../src/models/Cat";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    try {
      const breed = req.query.breed as string | undefined;
      const age = req.query.age as string | undefined;
      const color = req.query.color as string | undefined;

      let catsQuery = query(collection(db, "Cats"));

      if (breed) {
        catsQuery = query(catsQuery, where("breed", "==", breed));
      }
      if (age) {
        catsQuery = query(catsQuery, where("age", "==", parseInt(age)));
      }
      if (color) {
        catsQuery = query(catsQuery, where("color", "==", color));
      }

      const querySnapshot = await getDocs(catsQuery);
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
