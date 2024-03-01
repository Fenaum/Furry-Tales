import type { NextApiRequest, NextApiResponse } from "next";
import { db } from "../../../firebase/firebaseConfig";
import { getDoc, doc } from "firebase/firestore";

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
                const user = userSnapshot.data() as any;
                res.status(200).json(user);
            } else {
                res.status(404).json({ message: "User not found" });
            }
        } catch (error) {
            res.status(400).json({ error });
        }
    }
}