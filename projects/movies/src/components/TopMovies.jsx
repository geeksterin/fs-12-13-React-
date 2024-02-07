import { useSelector } from "react-redux";
import Slider from "react-slick";

import MovieCard from "./common/MovieCard";

const TopMovies = () => {
  const topMovies = useSelector((store) => store.home.topMovies);
  const carouselSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
  };

  console.log(topMovies);
  return (
    <>
      <h3>Top Movies</h3>
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
          {topMovies.map((movie) => (
            <MovieCard
              key={movie.id}
              {...{
                image: movie.poster_path,
                title: movie.title,
                releaseDate: movie.release_date,
                id: movie.id,
                entityType: "topMovies"
              }}
            />
          ))}
        </Slider>
      </div>
    </>
  );
};

export default TopMovies;
