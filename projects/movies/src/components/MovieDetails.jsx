import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import TopMovies from "./TopMovies";
import TopTvShows from "./TopTvShows";
import UpcomingMovies from "./UpcomingMovies";

const MovieDetails = () => {
  const params = useParams();

  const entityList = useSelector((store) => store.home[params.entityType]);
  const entityDetails = entityList.find((entity) => entity.id == params.id);
  console.log(entityDetails);
  return (
    <>
      <h1>Movie Details</h1>
      <div style={{ display: "flex" }}>
        <div style={{ width: "50%" }}>
          <img
            style={{ width: "100%" }}
            src={
              "https://image.tmdb.org/t/p/original" + entityDetails.poster_path
            }
          />
        </div>
        <div style={{ width: "50%" }}>
          <h2>
            {entityDetails.title
              ? entityDetails.title
              : entityDetails.original_name}
          </h2>
          <p>{entityDetails.overview} </p>
        </div>
      </div>
      {params.entityType === "topMovies" && <TopMovies />}
      {params.entityType === "topTvShows" && <TopTvShows />}
      {params.entityType === "upcomingMovies" && <UpcomingMovies />}
    </>
  );
};

export default MovieDetails;
