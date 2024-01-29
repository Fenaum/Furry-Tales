import { NextApiRequest, NextApiResponse } from "next";
import { signUpUser } from "../../../../src/lib/auth"; // import your signUpUser function

export default async function registerHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method === "POST") {
      const { email, password, confirmPassword } = req.body;

      try {
        const user = await signUpUser({ email, password, confirmPassword });
        res.status(200).json({ uid: user?.uid });
      } catch (error: any) {
        console.error("Error signing up user:", error);
        if (error.message === "Passwords do not match") {
          res.status(400).json({ error: error.message });
        } else {
          res.status(500).json({ error: error.message });
        }
      }
    } else {
      res.setHeader("Allow", ["POST"]);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  } catch (error) {
    console.error("Error in registerHandler:", error);
  }
}
