import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import resMenu from "../utils/mockMenu";
import Shimmer from "./Shimmer";
import { CDN_URL } from "../utils/contants";
import Error from "./Error";
const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(resMenu);
  //   useEffect(() => {
  //     fetchMenu();
  //   }, []);
  //   const fetchMenu = async () => {
  //     const data = await fetch(
  //       "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=121603",
  //     );
  //     const json = await data.json();
  //     console.log(json);
  //     setResInfo(json.data);
  //   };
  const { resId } = useParams();

  const restaurant = resMenu.find((res) => res.restaurantId === resId);
  if (restaurant === undefined) {
    return <Error />;
  }

  return resInfo === null ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <img
        className="restaurant-image"
        src={CDN_URL + restaurant.cloudinaryImageId}
        alt="restaurant-img"
      />
      <h1>{restaurant.restaurantName}</h1>

      {restaurant.menu.map((category) => (
        <div key={category.category}>
          <h2>{category.category}</h2>

          {category.items.map((item) => (
            <li key={item.name}>
              {item.name} - ₹{item.price}
            </li>
          ))}
        </div>
      ))}
    </div>
  );
};
export default RestaurantMenu;
