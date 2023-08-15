import type { NextApiRequest, NextApiResponse } from "next";

import { getEarlyAccessFormSchema } from "@/src/schema";

import { PutObjectCommand } from "@aws-sdk/client-s3";
import { s3Client } from "@/src/lib/aws";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST")
    return res
      .status(405)
      .json({ status: "fail", message: "Method Not Allowed" });

  const { name, email, message } = req.body;

  const params = {
    Bucket: process.env.AMAZON_S3_BUCKET,
    Key: `Get Early Access/${email}_${new Date().toISOString()}`,
    Body: `Get Early Access\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`,
    ContentType: "text/plain",
    Metadata: {
      form: "get early access",
    },
  };

  try {
    getEarlyAccessFormSchema.parse({ name, email, message });

    const command = new PutObjectCommand(params);
    await s3Client.send(command);

    res
      .status(200)
      .json({ success: true, message: "Submission sent successfully" });
  } catch (error) {
    console.error("Error submitting get early access form", error);
    res
      .status(500)
      .json({ success: false, message: "Failed to send submission" });
  }
}
