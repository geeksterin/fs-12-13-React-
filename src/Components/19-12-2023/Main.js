import { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import restaurantList from "./RestaurantsList.json";

const Main = () => {
  const [restaurantData, setRestaurantData] = useState(restaurantList);

  let searchKey = "";
  let inputRating = 0;

  const onSearchChange = (e) => {
    if (e.target.id === "searchBox") {
      searchKey = e.target.value;
    } else if (e.target.id === "ratingBox") {
      inputRating = e.target.value;
      if (!e.target.value) {
        inputRating = 0;
      }
    }
    console.log("SearchKey", searchKey);
    console.log("InputRating", inputRating);
    const filteredList = restaurantList.filter(
      (data) =>
        data.name.toLowerCase().includes(searchKey.toLowerCase()) &&
        data.rating >= inputRating
    );
    setRestaurantData(filteredList);
  };

  return (
    <>
      <h1>Restaurant App</h1>
      <section>
        <input
          type="text"
          placeholder="Search restaurants.."
          onChange={onSearchChange}
          id="searchBox"
        />
        <input
          type="number"
          step="1"
          min={1}
          max={5}
          onChange={onSearchChange}
          id="ratingBox"
        />
        {restaurantData.map((restaurantDetails) => {
          return (
            <RestaurantCard
              key={restaurantDetails._id._id}
              {...restaurantDetails}
            />
          );
        })}
      </section>
    </>
  );
};

export default Main;
