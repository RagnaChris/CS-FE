import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST")
    return res
      .status(405)
      .json({ status: "fail", message: "Method Not Allowed" });

  const { accessToken, refreshToken } = req.body;
  // clear cookies
  res.setHeader("Set-Cookie", [
    `accessToken=${accessToken}; HttpOnly; Path=/; Secure; SameSite=Strict`,
    `refreshToken=${refreshToken}; HttpOnly; Path=/; Secure; SameSite=Strict`,
  ]);

  res.status(200).json({ message: "Cookies set successful" });
}
