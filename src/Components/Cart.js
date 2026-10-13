import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";
const Cart = ({ item }) => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    // dispatch an action
    dispatch(clearCart());
  };

  return (
    <div className="m-4 p-4 text-ce{nter">
      <div className="flex justify-center items-center">
        <h1 className="font-semibold text-2xl">Cart</h1>
        <button
          className="bg-[#c8a98a] text-white rounded-lg ml-6 mb-1 p-2"
          onClick={() => {
            handleClearCart(item);
          }}
        >
          Clear Cart
        </button>
      </div>
      {cartItems.length === 0 && (
        <h1 className="ml-127">Cart is empty. Add items in your cart!</h1>
      )}
      <div className="m-auto p-4 w-6/12 border-2 border-solid border-amber-700 shadow-xl rounded-lg">
        <ItemList item={cartItems} />
      </div>
    </div>
  );
};
export default Cart;
