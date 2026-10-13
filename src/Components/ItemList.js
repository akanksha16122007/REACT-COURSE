//import { useOutletContext } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
const ItemList = ({ item }) => {
  //const { setCartItems } = useOutletContext();
  //console.log(item);
  const dispatch = useDispatch();
  const handleAddItem = (i) => {
    //dispatch an action
    dispatch(addItem(i));
  };

  return (
    <div>
      <div>
        {item.map((i, index) => {
          return (
            <div key={index} data-testid="food-items">
              <div className="flex text-left border-b-2 border-[#c8a98a] shadow-lg">
                <span className="mt-1.5 mr-2.5 ">{i.veg ? "🟢" : "🔴"}</span>
                <div className="flex flex-col items-start">
                  <span className="py-1 font-bold text-lg">{i.name}</span>
                  <span className="text-md font-semibold">₹{i.price}</span>
                  <span className="text-sm ">{i.description}</span>
                </div>
                <button
                  className="ml-auto mt-2 w-10 h-10 bg-[#FFFDD0] border-2 border-[#c8a98a] rounded-lg hover:bg-[#c8a98a] "
                  // onClick={() => {
                  //   setCartItems((prev) => prev + 1);
                  // }}
                  onClick={() => {
                    handleAddItem(i);
                  }}
                >
                  ADD
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default ItemList;
