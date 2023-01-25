import CartItem from "../../components/CartItem/CartItem";
import { useCartStore } from "../../store/store";
import "./cartPage.scss";
export default function CartPage() {
  const cartItems = useCartStore((state) => state.cart);
  const totalItems = useCartStore((state) => state.cartTotalItems());
  const totalItemsPrice = useCartStore((state) => state.cartTotalItemsPrice());
  const cartBeforeDiscountTotalItemsPrice = useCartStore((state) =>
    state.cartBeforeDiscountTotalItemsPrice()
  );
  return (
    <>
      <div className="cartPage--container">
        <main className="cartPage--main">
          <div className="cart--cartItems">
            {cartItems.length > 0 ? (
              cartItems.map((item) => <CartItem item={item} key={item.id} />)
            ) : (
              <h4>Your Cart Is Empty...</h4>
            )}
          </div>
        </main>

        <aside className="cartPage--aside">
          {cartItems.length > 0 && (
            <div className="cart--info">
              <h4 className="cart--info-subtotalBeforeDiscount">
                Subtotal Before Discount:{" "}
                <span>{cartBeforeDiscountTotalItemsPrice}$</span>
              </h4>
              <h4 className="cart--info-finalSubtotal">
                Subtotal:
                <br />
                <span>
                  ({totalItems} items) <br />
                  {totalItemsPrice} $
                </span>
              </h4>
              <button>Proceed To Payment</button>
            </div>
          )}
        </aside>
      </div>
    </>
  );
}
