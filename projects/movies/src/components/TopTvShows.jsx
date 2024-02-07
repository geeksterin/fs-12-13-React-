import { useSelector } from "react-redux";
import Slider from "react-slick";

import MovieCard from "./common/MovieCard";

const TopTvShows = () => {
  const topTvShows = useSelector((store) => store.home.topTvShows);
  const carouselSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <>
      <h2>Top TV Shows</h2>
      <div
        style={
          {
            //   display: "flex",
            //   justifyContent: "center",
            //   flexWrap: "wrap",
          }
        }
      >
        <Slider {...carouselSettings}>
          {topTvShows.map((movie) => (
            <MovieCard
              key={movie.id}
              {...{
                image: movie.poster_path,
                title: movie.original_name,
                releaseDate: movie.first_air_date,
                id: movie.id,
                entityType: "topTvShows"
              }}
            />
          ))}
        </Slider>
      </div>
    </>
  );
};

export default TopTvShows;
