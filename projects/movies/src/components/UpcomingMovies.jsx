import { useSelector } from "react-redux";
import Slider from "react-slick";

import MovieCard from "./common/MovieCard";

const UpcomingMovies = () => {
  const upcomingMovies = useSelector((store) => store.home.upcomingMovies);
  const carouselSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
  };

  console.log(upcomingMovies);
  return (
    <>
      <h3>Upcoming Movies</h3>
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
          {upcomingMovies.map((movie) => (
            <MovieCard
              key={movie.id}
              {...{
                image: movie.poster_path,
                title: movie.title,
                releaseDate: movie.release_date,
                id: movie.id,
                entityType: "upcomingMovies"
              }}
            />
          ))}
        </Slider>
      </div>
    </>
  );
};

export default UpcomingMovies;
