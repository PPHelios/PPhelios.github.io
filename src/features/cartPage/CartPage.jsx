import CartItem from "../../components/CartItem/CartItem";
import { useStore } from "../../store/useStore";
import "./cartPage.scss";
export default function CartPage() {
  const cartItems = useStore((state) => state.cart);
  const totalItems = useStore((state) => state.cartTotalItems());
  const totalItemsPrice = useStore((state) => state.cartTotalItemsPrice());
  const cartBeforeDiscountTotalItemsPrice = useStore((state) =>
    state.cartBeforeDiscountTotalItemsPrice()
  );
  return (
    <>
      <div className="cartPage--container">
        <main className="cartPage--main">
          <div className="cart--cartItems">
            {cartItems.length > 0 ? (
              cartItems.map((item) => <CartItem item={item} key={item._id} />)
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
              <div className="steam" id="steam1">
                {" "}
              </div>
              <div className="steam" id="steam2">
                {" "}
              </div>
              <div className="steam" id="steam3">
                {" "}
              </div>
              <div className="steam" id="steam4">
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
