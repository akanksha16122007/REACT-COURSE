import resMenu from "../utils/mockMenu";
import { useEffect, useState } from "react";
const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(resMenu);

  //fetch data
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
  return resInfo;
};
export default useRestaurantMenu;
