import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { CDN_URL } from "../utils/contants";
import Error from "./Error";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import resMenu from "../utils/mockMenu";
import { useState } from "react";
import resList from "../utils/mockData";
import { useOutletContext } from "react-router-dom";

import RestaurantCategory from "./RestaurantCategory";
const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu();
  const [foodType, setFoodType] = useState("All");
  // const [cartItems, setCartItems] = useState(0);
  const { setCartItems } = useOutletContext();
  const [showIndex, setShowIndex] = useState(null);

  const restaurant = resMenu.find((res) => res.restaurantId === resId);
  const restaurantInfo = resList.find((res) => res.data.id === resId);
  if (restaurant === undefined) {
    return <Error />;
  }

  return resInfo === null ? (
    <Shimmer />
  ) : (
    <div className="text-center">
      <img
        className="ml-145 rounded-lg border-2 border-[#c8a98a] shadow-lg mt-10 mb-10"
        src={CDN_URL + restaurant.cloudinaryImageId}
        alt="restaurant-img"
      />
      <h1 className="font-bold text-xl">{restaurant.restaurantName}</h1>
      <p className="text-lg font-bold">
        <i className="fa-solid fa-star"> </i>
        {restaurantInfo?.data.avgRating} - ₹
        {restaurantInfo?.data.costForTwo / 100} for two
      </p>
      <h2 className="text-lg font-bold">Filtered Restaurants</h2>
      <button
        className=" bg-[#FFFDD0] border-2 border-[#c8a98a] rounded-lg hover:bg-[#c8a98a] w-15 h-10 m-4"
        onClick={() => {
          setFoodType("All");
        }}
      >
        All
      </button>
      <button
        className=" bg-[#FFFDD0] border-2 border-[#c8a98a] rounded-lg hover:bg-[#c8a98a] w-20 h-10 m-4 "
        onClick={() => {
          setFoodType("Veg");
        }}
      >
        🟢 Veg
      </button>
      <button
        className="bg-[#FFFDD0] border-2 border-[#c8a98a] rounded-lg hover:bg-[#c8a98a] w-25 h-10"
        onClick={() => {
          setFoodType("Non-Veg");
        }}
      >
        🔴 Non-Veg
      </button>

      {/* {restaurant.menu.map((category) => (
        <div key={category.category}>
          <h2 className="font-bold text-xl">{category.category}</h2>

          {category.items
            .filter((item) => {
              if (foodType === "All") {
                return true;
              }
              if (foodType === "Veg") {
                return item.veg === true;
              }
              return item.veg === false;
            })
            .map((item) => (
              <li key={item.name}>
                {item.name} - ₹{item.price}
                <button
                  className="ml-8 w-15 bg-[#FFFDD0] border-2 border-[#c8a98a] rounded-lg hover:bg-[#c8a98a]"
                  onClick={() => {
                    setCartItems((prev) => prev + 1);
                  }}
                >
                  ADD
                </button>
              </li>
            ))}
        </div>
      ))} */}
      {restaurant.menu.map((category, index) => (
        //Controlled Component
        <RestaurantCategory
          key={category.category}
          category={category}
          foodType={foodType}
          setCartItems={setCartItems}
          showItems={index === showIndex ? true : false}
          setShowIndex={() => setShowIndex(index)}
        />
      ))}
    </div>
  );
};
export default RestaurantMenu;
