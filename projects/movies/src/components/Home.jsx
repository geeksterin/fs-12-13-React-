import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchDataFromApi } from "../utils/api";
import {
  setTopMovies,
  setTopTvShows,
  setUpcomingMovies,
} from "../redux/homeSlice";
import TopMovies from "./TopMovies";
import TopTvShows from "./TopTvShows";
import UpcomingMovies from "./UpcomingMovies";

const Home = () => {
  const dispatch = useDispatch();
  const homeData = useSelector((store) => store.home);
  const commonApiParams = {
    language: "en-US",
    page: 1,
  };

  useEffect(() => {
    if (homeData.topMovies.length === 0) {
      fetchDataFromApi("/trending/movie/day", commonApiParams)
        .then((data) => {
          dispatch(setTopMovies(data));
        })
        .catch((err) => console.error(err));
    }

    if (homeData.topTvShows.length === 0) {
      fetchDataFromApi("/trending/tv/day", commonApiParams)
        .then((data) => {
          dispatch(setTopTvShows(data));
        })
        .catch((err) => console.error(err));
    }

    if (homeData.upcomingMovies.length === 0) {
      fetchDataFromApi("/movie/upcoming", commonApiParams)
        .then((data) => {
          dispatch(setUpcomingMovies(data));
        })
        .catch((err) => console.error(err));
    }
  }, []);
  return (
    <>
      <h1>Home</h1>
      <TopMovies />
      <TopTvShows />
      <UpcomingMovies />
    </>
  );
};

export default Home;
