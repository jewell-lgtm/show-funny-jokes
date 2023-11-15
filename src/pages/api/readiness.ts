import type { NextApiRequest, NextApiResponse } from "next";
import { Readiness } from "@/types";

const readiness: Readiness = { isReady: true };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Readiness>,
) {
  await new Promise((resolve) =>
    setTimeout(resolve, 1000 + Math.random() * 1000),
  );
  res.status(200).json(readiness);
}
