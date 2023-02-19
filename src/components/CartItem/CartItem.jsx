import "./cartItem.scss";
import { useStore } from "../../store/useStore";
export default function CartItem({ item }) {
  const increaseCartItem = useStore((state) => state.increaseCartItem);
  const decreaseCartItem = useStore((state) => state.decreaseCartItem);
  const deleteCartItem = useStore((state) => state.deleteCartItem);
  return (
    <div className="cartItem">
      <div className="cartItem--item-img">
        <img
          src={require("../../assets/images/" + item.img + ".webp")}
          alt={item.alt}
        />
      </div>
      <div className="cartItem--item-data">
        <div className="cartItem--item-data-name">{item.name}</div>
        <div className="cartItem--item-data-quantity">
          <button onClick={() => decreaseCartItem(item._id)}>-</button>
          <div>{item.quantity}</div>
          <button onClick={() => increaseCartItem(item._id)}>+</button>
        </div>
      </div>
      <div className="cartItem--item-price">
        <button onClick={() => deleteCartItem(item._id)}>
          <span className="material-symbols-outlined">delete</span>
        </button>
        <div>{item.discountedPrice}$</div>
      </div>
    </div>
  );
}
