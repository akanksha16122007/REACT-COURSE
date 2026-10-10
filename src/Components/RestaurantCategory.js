import ItemList from "./ItemList";
import { useState } from "react";
const RestaurantCategory = ({ category, showItems, setShowIndex }) => {
  // const [showItems, setShowItems] = useState(false);
  const handleClick = () => {
    setShowIndex();
  };
  return (
    // Header
    <div>
      <div className="w-6/12 mx-auto my-4 p-4 bg-[#FFFDD0] shadow-lg ">
        <div
          className="flex justify-between cursor-pointer"
          onClick={() => {
            handleClick();
          }}
        >
          <span className="font-semibold text-lg">
            {category.category} ({category.items.length})
          </span>
          <span>
            <i className="fa-solid fa-angle-down"></i>
          </span>
        </div>
        {/*Accordion Body*/}
        {showItems && <ItemList item={category.items} />}
      </div>
    </div>
  );
};
export default RestaurantCategory;
