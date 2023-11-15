// use client
import { useJokesContext } from "@/components/WithJokes";
import { Joke } from "@/types";
import { useMemo, useState } from "react";
import { useJokes } from "@/hooks/useJokes";

const useJokesState = () => {
  const [favourites, setFavourites] = useState<number[]>([]);
  const { jokes: allJokes } = useJokesContext();

  const funnyJokes = useMemo(
    () =>
      allJokes.filter((joke) => joke.type === "programming") as Array<
        Joke & { type: "programming" }
      >,
    [allJokes],
  );

  const toggleFavourite = (id: number) => {
    setFavourites((existing) => {
      if (existing.includes(id)) {
        return existing.filter((item) => item !== id);
      }
      return [...existing, id];
    });
  };

  const favouriteJokes = useMemo(() => {
    return funnyJokes.filter((joke) => favourites.includes(joke.id));
  }, [favourites, funnyJokes]);

  const nonFavoriteJokes = useMemo(() => {
    return funnyJokes.filter((joke) => !favourites.includes(joke.id));
  }, [favourites, funnyJokes]);

  return { toggleFavourite, favouriteJokes, nonFavoriteJokes };
};

export const ShowJokes = () => {
  const { toggleFavourite, favouriteJokes, nonFavoriteJokes } = useJokesState();

  return (
    <div>
      <h1>Programming Jokes</h1>
      <h2>Favourites</h2>
      <ul>
        {favouriteJokes.map((joke) => (
          <li key={joke.id}>
            <button onClick={() => toggleFavourite(joke.id)}>❤️</button>{" "}
            {joke.question} {joke.answer}
          </li>
        ))}
      </ul>
      <h2>Others</h2>
      <ul>
        {nonFavoriteJokes.map((joke) => (
          <li key={joke.id}>
            <button onClick={() => toggleFavourite(joke.id)}>🤍</button>{" "}
            {joke.question} {joke.answer}
          </li>
        ))}
      </ul>
    </div>
  );
};
