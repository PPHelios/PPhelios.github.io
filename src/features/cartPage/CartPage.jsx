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
          <section className="coffeeMachine">
            <div class="container">
              <div class="coffee-header">
                <div class="coffee-header__buttons coffee-header__button-one"></div>
                <div class="coffee-header__buttons coffee-header__button-two"></div>
                <div class="coffee-header__display"></div>
                <div class="coffee-header__details"></div>
              </div>
              <div class="coffee-medium">
                <div class="coffe-medium__exit"></div>
                <div class="coffee-medium__arm"></div>
                <div class="coffee-medium__liquid"></div>
                <div class="coffee-medium__smoke coffee-medium__smoke-one"></div>
                <div class="coffee-medium__smoke coffee-medium__smoke-two"></div>
                <div class="coffee-medium__smoke coffee-medium__smoke-three"></div>
                <div class="coffee-medium__smoke coffee-medium__smoke-for"></div>
                <div class="coffee-medium__cup"></div>
              </div>
              <div class="coffee-footer"></div>
            </div>
          </section>
          <section className="hotCup">
            <div className="container">
              <div class="steam" id="steam1">
                {" "}
              </div>
              <div class="steam" id="steam2">
                {" "}
              </div>
              <div class="steam" id="steam3">
                {" "}
              </div>
              <div class="steam" id="steam4">
                {" "}
              </div>

              <div id="cup">
                <div id="cup-body">
                  <div id="cup-shade"></div>
                </div>
                <div id="cup-handle"></div>
              </div>

              <div id="saucer"></div>

              <div id="shadow"></div>
            </div>
          </section>
        </aside>
      </div>
    </>
  );
}
