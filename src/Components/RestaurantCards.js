import { CDN_URL } from "../utils/contants";
import check from "../utils/check.png";
const RestaurantCards = (props) => {
  const { resData } = props;
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    deliveryTime,
    veg,
  } = resData?.data;
  return (
    <div
      className="w-53 h-130 p-1.5 m-2.5 border-2 border-solid border-[#c8a98a] rounded-lg shadow-xl
    transition-all duration-300 hover:scale-[1.03] hover:bg-[#FFF7E6] hover:shadow-2xl"
    >
      <img className="res-image" src={CDN_URL + cloudinaryImageId} />
      <h3 className="font-bold py-3 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>
        <i className="fa-solid fa-star"></i>
        {avgRating}
      </h4>
      <h4>₹{costForTwo / 100} for two</h4>
      <h4>{deliveryTime} mins</h4>
      <button>{veg ? <h1>🟢 VEG</h1> : <h1>🔴 NON-VEG</h1>}</button>
    </div>
  );
};
//Higher Order Component

// input - RestaurantCard ==>> RestaurantCardPromoted

export const withPromotedLabel = (RestaurantCards) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-[#c8a98a] text-white  p-2 rounded-md">
          Promoted
        </label>
        <RestaurantCards {...props} />
      </div>
    );
  };
};

export default RestaurantCards;
