//import RestaurantCards from "./RestaurantCards";
import { withPromotedLabel } from "./RestaurantCards";
import React, { lazy, Suspense } from "react";
import resList from "../utils/mockData";
import { useState, useEffect } from "react";
import resList from "../utils/mockData";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const RestaurantCards = lazy(() => import("./RestaurantCards"));
const Body = () => {
  //local state variable --> superpowerful variable
  const [listOfRestaurants, setListOfRestaurants] = useState(resList);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState(resList);
  console.log(listOfRestaurants);
  const RestaurantCardPromoted = withPromotedLabel(RestaurantCards);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.624480699999999&page_type=DESKTOP_WEB_LISTING",
    );
    const json = await data.json();
    console.log(json);
    //optional chaining --> gud way to handle the data.
    /*setListOfRestaurants(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants,
    );
    setFilteredRestaurants(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants,
    );
    */
  };
  //conditional rendering:
  // if (listOfRestaurants.length === 0) {
  //   return <Shimmer />;
  // }
  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return (
      <h1>Looks like you're offline! Please check your internet connection!</h1>
    );
  }

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex">
        <div className="m-4 p-4 ml-110">
          <input
            type="text"
            name="search"
            className="border border-solid border-black w-100 h-13 rounded-l-lg shadow-md p-4"
            placeholder="Search for restaurants and food"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="cursor-pointer h-13 w-6 bg-[#c8a98a] rounded-r-lg "
            onClick={() => {
              //filter the restaurants cards and update the ui according to the search input
              const filteredRestaurant = listOfRestaurants.filter((res) =>
                res.data.name.toLowerCase().includes(searchText.toLowerCase()),
              );
              setFilteredRestaurants(filteredRestaurant);
            }}
          >
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>

        <button
          className="bg-[#c8a98a] p-2.5 m-7 w-55 h-12 border border-solid border-black rounded-lg cursor-pointer text-white"
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

      <div className="flex flex-wrap">
        {filteredRestaurants.map((restaurant) => (
          <Link
            key={restaurant.data.id}
            to={"/restaurants/" + restaurant.data.id}
          >
            {restaurant.data.promoted ? (
              <RestaurantCardPromoted resData={restaurant} />
            ) : (
              <Suspense fallback={<Shimmer />}>
                <RestaurantCards resData={restaurant} />
              </Suspense>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
