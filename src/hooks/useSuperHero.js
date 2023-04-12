import { useMemo, useState } from "react";
import axios from "axios";
import { useQuery } from "react-query";

const queryFn = (id) => {
  // const id = querykey[1]                    ({queryKey})
  return axios.get(`http://localhost:4000/superheroes/${id}`);
};

export default function useSuperHero(heroId) {
  return useQuery(["super-heroes", heroId], () => queryFn(heroId)); //just call function
}
