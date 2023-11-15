// common types

export type Joke = {
  id: number;
  type: "general" | "programming";
  question: string;
  answer: string;
};

export type Readiness = {
  isReady: boolean;
};
