import { createContext, ReactNode, useContext } from "react";
import { useJokes } from "@/hooks/useJokes";
import { Joke } from "@/types";

const JokesContext = createContext<{ jokes: Joke[] }>({ jokes: [] });

export const useJokesContext = () => {
  const context = useContext(JokesContext);

  if (context === undefined) {
    throw new Error(
      "useJokesContext must be used within a JokesContext.Provider",
    );
  }

  return context;
};

export const WithJokes = (props: {
  loading: ReactNode;
  fallback: ReactNode;
  children: ReactNode;
}) => {
  const { loading, error, jokes } = useJokes();
  if (loading) return props.loading;
  if (error || jokes == null) return props.fallback;
  return (
    <JokesContext.Provider value={{ jokes }}>
      {props.children}
    </JokesContext.Provider>
  );
};
