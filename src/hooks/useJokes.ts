"use client";
import { useAsync } from "react-async-hook";
import { Joke } from "@/types";

const asyncFunction = async () => {
  const response = await fetch("/api/jokes").then((res) => res.json());
  return response as Joke[];
};

export const useJokes = () => {
  const { loading, error, result: jokes } = useAsync(asyncFunction, []);

  return { jokes, loading, error };
};
