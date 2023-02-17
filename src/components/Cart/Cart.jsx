import "./cart.scss";
import { useStore } from "../../store/useStore";
import CartItem from "../CartItem/CartItem";
import { Link } from "react-router-dom";
export default function Cart({ onClick }) {
  const cartItems = useStore((state) => state.cart);
  //const loggedin = useStore((state) => state.loggedIn);
  const totalItems = useStore((state) => state.cartTotalItems());
  const totalItemsPrice = useStore((state) => state.cartTotalItemsPrice());
  const cartBeforeDiscountTotalItemsPrice = useStore((state) =>
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
            cartItems.map((item) => <CartItem item={item} key={item._id} />)
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
            <button onClick={() => onClick(false)}>Continue Shopping</button>
            <Link to="dass-coffee/cart">
              <button onClick={() => onClick(false)}>
                Proceed to Checkout
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
