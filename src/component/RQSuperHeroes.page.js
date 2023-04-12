import { useQuery } from "react-query";
import { useMemo, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import useSuperHeroes from "../hooks/useSuperHeroes";

export const RQSuperHeroesPage = () => {
  const [interval, setInterval] = useState(3000);

  const onSuccess = (data) => {
    if (data.data.length >= 4 && interval === 3000) {
      setInterval(0);
    }
  };

  const onError = (error) => {
    console.log("error", error);
  };

  // const queryFn = useMemo(() => {
  //   return () => {
  //     return axios.get("http://localhost:4000/superheroes");
  //   };
  // }, []);

  const { isLoading, data, isError, error, isFetching, refetch } =
    useSuperHeroes();
  // useQuery(
  //   "super-heroes",
  //   queryFn,
  //   {
  //     // cacheTime:5000,
  //     // staleTime:30000,
  //     // refetchOnMount: false,
  //     // refetchOnWindowFocus:true
  //     // refetchInterval: 2000,
  //     // refetchIntervalInBackground:true
  //     //enabled: false,
  //     // onSuccess,
  //     // onError,
  //     // refetchInterval: interval,
  //     refetchIntervalInBackground: true,
  //     select: (data) => {
  //       const superHeroes = data?.data.map((hero) => hero.name);
  //       return superHeroes;
  //     },
  //   }
  // );

  console.log({ isLoading, isFetching });
  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <>
      <h2> RQ Super Heroes Page</h2>
      <button onClick={refetch}>Fatch Heroes</button>
      {data?.data.map((hero) => {
        return (
          <div key={hero.id}>
            <Link to={`/rq-super-hero/${hero.id}`}>{hero.name}</Link>;
          </div>
        );
      })}
      {/* {data.map((hero) => {
        return <div key={hero}>{hero}</div>;
      })} */}
    </>
  );
};
