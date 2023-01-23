import "./cart.scss";
import { useCartStore } from "../../store/store";
import CartItem from "../CartItem/CartItem";
export default function Cart({ onClick }) {
  const cartItems = useCartStore((state) => state.cart);
  const totalItems = useCartStore((state) => state.cartTotalItems());
  const totalItemsPrice = useCartStore((state) => state.cartTotalItemsPrice());
  const cartBeforeDiscountTotalItemsPrice = useCartStore((state) =>
    state.cartBeforeDiscountTotalItemsPrice()
  );
  return (
    <div className="cart--container">
      <div className="cart">
        <div className="cart--top">
          <h4>YOUR CART</h4>
          <span
            className="material-symbols-outlined"
            onClick={() => onClick(false)}
          >
            close
          </span>
        </div>

        <div className="cart--cartItems">
          {cartItems.length > 0 ? (
            cartItems.map((item) => <CartItem item={item} key={item.id} />)
          ) : (
            <h4>Your Cart Is Empty...</h4>
          )}
        </div>
        {cartItems.length > 0 && (
          <div className="cart--info">
            <h4 className="cart--info-subtotalBeforeDiscount">
              Subtotal Before Discount:{" "}
              <span>{cartBeforeDiscountTotalItemsPrice}$</span>
            </h4>
            <h4 className="cart--info-finalSubtotal">
              Subtotal:{" "}
              <span>
                ({totalItems} items) {totalItemsPrice} $
              </span>
            </h4>
          </div>
        )}
        {cartItems.length > 0 && (
          <div className="cart--btns">
            <button>Continue Shopping</button>
            <button>Proceed to Checkout</button>
          </div>
        )}
      </div>
    </div>
  );
}
