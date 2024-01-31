import { NextApiRequest, NextApiResponse } from "next";
import { signOutUser } from "../../../../src/lib/auth"; // import your signUpUser function

export default async function registerHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method === "POST") {
        await signOutUser();
        res.status(200).json("User signed out successfully");
      } else {
        throw new Error(
          `The HTTP ${req.method} method is not supported at this route.`
        );
      }
    } catch (err) {
      res.status(500).json(err);
    }
}
