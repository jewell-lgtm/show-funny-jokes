import { ReactNode } from "react";
import { useReadiness } from "@/hooks/useReadiness";

export const WhenReady = (props: {
  loading: ReactNode;
  fallback: ReactNode;
  children: () => ReactNode;
}) => {
  const { loading, isReady } = useReadiness();

  if (loading) return props.loading;
  if (!isReady) return props.fallback;

  return props.children();
};
