import type { NextApiRequest, NextApiResponse } from "next";
import { Cat } from "../../../src/models/Cat";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const newCat: Cat = req.body; // Assuming the request body is properly typed
    // Validate and process the newCat object...
    res.status(200).json({ message: "Cat created successfully." });
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
