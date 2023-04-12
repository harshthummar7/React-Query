import { useQuery } from "react-query";
import axios from "axios";

const fetchSuperHeros = () => {
  return axios.get(`http://localhost:4000/superheroes`);
};

const fetchFriends = () => {
  return axios.get(`http://localhost:4000/friends`);
};

export default function ParallelQueries() {
  //   const { data: superheroes } = useQuery("super-heroes", fetchSuperHeros);
  //   const { data: friends } = useQuery("super-heroes", fetchFriends);
  useQuery("super-heroes", fetchSuperHeros);
  useQuery("friends", fetchFriends);
  return <div> Parallel Queries</div>;
}
