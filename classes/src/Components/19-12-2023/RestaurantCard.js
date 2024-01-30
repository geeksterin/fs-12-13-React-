const RestaurantCard = (props) => {
  return (
    <div style={{ border: "2px solid black" }}>
      <h2>{props.name}</h2>
      <h3>{props.rating}</h3>
      <h4>{props.address}</h4>
      <h5>{props.type_of_food}</h5>
    </div>
  );
};

export default RestaurantCard;
