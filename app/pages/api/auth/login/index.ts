import { NextApiRequest, NextApiResponse } from "next";
import { signInUser } from "../../../../src/lib/auth"; // import your signInUser function

export default async function loginHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { email, password } = req.body;

    try {
      const user = await signInUser({ email, password });
      res.status(200).json({ uid: user?.uid });
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
