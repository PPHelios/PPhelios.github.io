import "./cartItem.scss";
import { useCartStore } from "../../store/store";
export default function CartItem({ item }) {
  const increaseCartItem = useCartStore((state) => state.increaseCartItem);
  const decreaseCartItem = useCartStore((state) => state.decreaseCartItem);
  const deleteCartItem = useCartStore((state) => state.deleteCartItem);
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
          <button onClick={() => increaseCartItem(item.id)}>+</button>
          <div>{item.quantity}</div>
          <button onClick={() => decreaseCartItem(item.id)}>-</button>
        </div>
      </div>
      <div className="cartItem--item-price">
        <button onClick={() => deleteCartItem(item.id)}>
          <span className="material-symbols-outlined">delete</span>
        </button>
        <div>{item.discountedPrice}$</div>
      </div>
    </div>
  );
}
