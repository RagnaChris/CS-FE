import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST")
    return res
      .status(405)
      .json({ status: "fail", message: "Method Not Allowed" });

  // clear cookies
  res.setHeader("Set-Cookie", [
    "accessToken=; HttpOnly; Path=/; Max-Age=0",
    "refreshToken=; HttpOnly; Path=/; Max-Age=0",
  ]);

  res.status(200).json({ message: "Logout successful" });
}
