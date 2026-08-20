import { clearItem } from "../redux/cartSlice";
import ItemList from "./ItemList";
import { useSelector, useDispatch } from "react-redux";

const Cart = () => {
  const items = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handlerClearCartItems = () => {
    dispatch(clearItem());
  };

  return (
    <div className="text-center my-5">
      <h1 className="text-3xl border-l-black">Cart</h1>
      <button
        className="border bg-black rounded-xl text-white p-2 m-4"
        onClick={handlerClearCartItems}
      >
        Clear Cart
      </button>
      <div className="w-6/12  m-auto mt-22">
        <ItemList list={items} />
      </div>
    </div>
  );
};

export default Cart;
