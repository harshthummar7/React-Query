import { useMemo, useState } from "react";
import axios from "axios";
import { useQuery } from "react-query";

export default function useSuperHeroes() {
  const queryFn = useMemo(() => {
    return () => {
      return axios.get("http://localhost:4000/superheroes");
    };
  }, []);

  return useQuery("super-heroes", queryFn, {
    // cacheTime:5000,
    // staleTime:30000,
    // refetchOnMount: false,
    // refetchOnWindowFocus:true
    // refetchInterval: 2000,
    // refetchIntervalInBackground:true
    //enabled: false,
    // onSuccess,
    // onError,
    // refetchInterval: interval,
    //refetchIntervalInBackground: true,
    // select: (data) => {
    //   const superHeroes = data?.data.map((hero) => hero.name);
    //   return superHeroes;
    // },
  });
}
