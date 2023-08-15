import type { NextApiRequest, NextApiResponse } from "next";

import { mailingFormSchema } from "@/src/schema";

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

  const { email } = req.body;

  const params = {
    Bucket: process.env.AMAZON_S3_BUCKET,
    Key: `Mailing/${email}_${new Date().toISOString()}`,
    Body: `Mailing\n\nEmail: ${email}`,
    ContentType: "text/plain",
    Metadata: {
      form: "mailing",
    },
  };

  try {
    mailingFormSchema.parse({ email });

    const command = new PutObjectCommand(params);
    await s3Client.send(command);

    res
      .status(200)
      .json({ success: true, message: "Submission sent successfully" });
  } catch (error) {
    console.error("Error submitting mailing list form", error);
    res
      .status(500)
      .json({ success: false, message: "Failed to send submission" });
  }
}
