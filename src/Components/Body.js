import RestaurantCards from "./RestaurantCards";
import resList from "../utils/mockData";
import { useState } from "react";
import resList from "../utils/mockData";
const Body = () => {
  //local state variable --> superpowerful variable
  const [listOfRestaurants, setListOfRestaurants] = useState(resList);

  return (
    <div className="body">
      <div className="search">
        <input
          type="text"
          name="search"
          placeholder="Search for restaurants and food"
        />
        <button>Search</button>
      </div>
      <div className="filter">
        <button
          className="filter-btn"
          type="button"
          onClick={() => {
            //filter logic here
            const FilteredList = listOfRestaurants.filter(
              (res) => res.data.avgRating >= 4.3,
            );
            setListOfRestaurants(FilteredList);
          }}
        >
          Filter Top rated restaurants
        </button>
      </div>
      <div className="filter-worst">
        <button
          type="button"
          className="filter-worst"
          onClick={() => {
            const Worst = listOfRestaurants.filter(
              (res) => res.data.avgRating < 4,
            );
            setListOfRestaurants(Worst);
          }}
        >
          Worst Rated restaurants
        </button>
      </div>
      <div className="delivery">
        <button
          type="button"
          className="delivery-time"
          onClick={() => {
            const delivery = listOfRestaurants.filter(
              (res) => res.data.deliveryTime < 20,
            );
            setListOfRestaurants(delivery);
          }}
        >
          Less delivery time
        </button>
      </div>
      <div className="restaurant-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCards key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Body;
