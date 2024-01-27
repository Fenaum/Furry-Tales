import { NextApiRequest, NextApiResponse } from "next";
import { signUpUser } from "../../../../lib/auth"; // import your signUpUser function

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { email, password } = req.body;

    try {
      const user = await signUpUser({ email, password });
      res.status(200).json({ uid: user?.uid });
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
