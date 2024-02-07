import { Link } from "react-router-dom";

const MovieCard = (props) => {
  // console.log(props);
  return (
    <div
      style={{
        width: "180px",
        boxShadow: "2px 2px 2px grey",
        border: "0.5px solid black",
        margin: "0px 5px 5px 0px",
      }}
    >
      <Link to={`/${props.entityType}/${props.id}`}>
        <img
          style={{ width: "100%" }}
          src={"https://image.tmdb.org/t/p/original" + props.image}
        />
      </Link>
      <h3>{props.title}</h3>
      <span>{props.releaseDate}</span>
    </div>
  );
};

export default MovieCard;
