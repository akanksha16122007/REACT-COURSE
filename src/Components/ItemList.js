import { useOutletContext } from "react-router-dom";
const ItemList = ({ item }) => {
  const { setCartItems } = useOutletContext();
  //console.log(item);
  return (
    <div>
      <div>
        {item.map((i) => {
          return (
            <div key={i.id}>
              <div className="flex text-left border-b-2 border-[#c8a98a] shadow-lg">
                <span className="mt-1.5 mr-2.5 ">{i.veg ? "🟢" : "🔴"}</span>
                <div className="flex flex-col items-start">
                  <span className="py-1 font-bold text-lg">{i.name}</span>
                  <span className="text-md font-semibold">₹{i.price}</span>
                  <span className="text-sm ">{i.description}</span>
                </div>
                <button
                  className="ml-auto mt-2 w-10 h-10 bg-[#FFFDD0] border-2 border-[#c8a98a] rounded-lg hover:bg-[#c8a98a] "
                  onClick={() => {
                    setCartItems((prev) => prev + 1);
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
