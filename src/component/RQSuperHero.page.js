import React from "react";
import { useParams } from "react-router-dom";
import useSuperHero from "../hooks/useSuperHero";

export default function RQSuperHeroPage() {
  const { heroId } = useParams();
  const { isLoading, data, isError, error, isFetching, refetch } =
    useSuperHero(heroId);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <>
      <h2> RQ Super Hero Page</h2>
      <div>
        <h1>welcome hero</h1>
        {data?.data.id} - {data?.data.name}
      </div>
    </>
  );
}
