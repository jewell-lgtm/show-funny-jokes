import type { NextApiRequest, NextApiResponse } from "next";
import { Joke } from "@/types";

const jokes = [
  {
    id: 1,
    type: "general",
    question: "Why did the chicken cross the road?",
    answer: "To get to the other side!",
  },
  {
    id: 2,
    type: "programming",
    question: "Why do programmers prefer dark mode?",
    answer: "Because light attracts bugs!",
  },
  {
    id: 3,
    type: "general",
    question: "What do you call fake spaghetti?",
    answer: "An impasta!",
  },
  {
    id: 4,
    type: "programming",
    question: "How do you comfort a JavaScript bug?",
    answer: "You console it.",
  },
  {
    id: 5,
    type: "general",
    question: "Why don’t scientists trust atoms?",
    answer: "Because they make up everything!",
  },
  {
    id: 6,
    type: "programming",
    question: "Why was the JavaScript developer sad?",
    answer: "Because he didn’t know how to Express his feelings.",
  },
  {
    id: 7,
    type: "general",
    question: "What did one wall say to the other wall?",
    answer: "I’ll meet you at the corner.",
  },
  {
    id: 8,
    type: "programming",
    question: "What is a programmer’s favorite hangout place?",
    answer: "Foo Bar!",
  },
  {
    id: 9,
    type: "general",
    question: "What do you call cheese that isn’t yours?",
    answer: "Nacho cheese!",
  },
  {
    id: 10,
    type: "programming",
    question: "Why do programmers always mix up Christmas and Halloween?",
    answer: "Because Oct 31 == Dec 25!",
  },
] satisfies Joke[];

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse<Joke[]>,
) {
  await new Promise((resolve) =>
    setTimeout(resolve, 1000 + Math.random() * 1000),
  );
  res.status(200).json(jokes);
}
