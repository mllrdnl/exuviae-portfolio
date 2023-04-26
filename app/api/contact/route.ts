import type { NextApiRequest, NextApiResponse } from "next";

interface MessageRequest extends NextApiRequest {
  body: {
    email: string;
    name: string;
    message: string;
  };
}

export default async function handler(
  req: MessageRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    res.status(405).send("Method not allowed");
  }

  const name = req.body.name;
  const email = req.body.email;
  const message = req.body.message;

  console.log("Data:", name, email, message);
  res.status(200).json({ message: "success" });
}
