"use client";
import { useAsync } from "react-async-hook";

const asyncFunction = async () => {
  const response = await fetch("/api/readiness").then((res) => res.json());
  return response.isReady;
};

export const useReadiness = () => {
  const { loading, error, result: isReady } = useAsync(asyncFunction, []);

  return { isReady, loading, error };
};
