import { useRef } from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Cart from "../Cart/Cart";
import { useCartStore } from "../../store/store";
import "./navBar.scss";

export const Navbar = () => {
  const totalItems = useCartStore((state) => state.cartTotalItems());
  const [menuOpened, setMenuOpened] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [isNarrowScreen, setIsNarrowScreen] = useState(false);
  const navRef = useRef(null);
  const shoppingBagRef = useRef(null);
  const shoppingBagRef2 = useRef(null);
  useEffect(() => {
    // set initial value
    const mediaWatcher = window.matchMedia("(max-width: 667px)");
    setIsNarrowScreen(mediaWatcher.matches);

    //watch for updates
    function updateIsNarrowScreen(e) {
      setIsNarrowScreen(e.matches);
      setMenuOpened(false);
      // Set top for navbar
    }
    mediaWatcher.addEventListener("change", updateIsNarrowScreen);
    // Set top for navbar

    function handleNavigation(e) {
      if (window.scrollY < 50) {
        navRef.current.style.top = "50px";
      } else {
        navRef.current.style.top = "10px";
      }
    }
    window.addEventListener("scroll", handleNavigation);
    // clean up after ourselves
    return function cleanup() {
      mediaWatcher.removeEventListener("change", updateIsNarrowScreen);
      window.removeEventListener("scroll", handleNavigation);
    };
  });
  useEffect(() => {
    if (totalItems > 0) {
      shoppingBagRef.current.style.color = `#ff5b19`;
      shoppingBagRef2.current.style.color = `#ff5b19`;
    } else {
      shoppingBagRef.current.style.color = `#fff`;
      shoppingBagRef2.current.style.color = `#ff5b19`;
    }
  }, [totalItems]);
  return (
    <>
      <nav ref={navRef}>
        <div className="nav-left">
          <div className="logo"></div>
          <Link to="dass-coffee/">
            <h3>Dass Coffee</h3>
          </Link>
        </div>
        <div className="nav-main">
          {(menuOpened || !isNarrowScreen) && (
            <div className="nav-main-menu">
              <Link onClick={() => setMenuOpened(false)} to="/shop">
                Shop
              </Link>
              <Link onClick={() => setMenuOpened(false)} to="about">
                About Us
              </Link>
              <svg
                fill="none"
                height="31"
                viewBox="0 0 52 31"
                width="52"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="m42.9587 17.3979c-4.7968 0-8.6989-3.9021-8.6989-8.69894 0-4.79678 3.9021-8.69896 8.6989-8.69896s8.699 3.90218 8.699 8.69896c0 4.79684-3.9022 8.69894-8.699 8.69894zm0-13.37737c-2.5794 0-4.6784 2.09903-4.6784 4.67843 0 2.57944 2.099 4.67844 4.6784 4.67844s4.6785-2.099 4.6785-4.67844c0-2.5794-2.0991-4.67843-4.6785-4.67843z"
                  fill="#ff5c1b"
                ></path>
                <path
                  d="m18.1359 5.69507h18.1342l-2.4507 12.41313c-1.3488 7.6356-6.6069 12.8918-15.6852 12.8918-9.07843 0-14.33645-5.2562-15.68533-12.8918l-2.44887-12.41313z"
                  fill="#ff5c1b"
                ></path>
                <path
                  d="m14.6723 16.8636c0 1.9006-1.5421 3.4427-3.4427 3.4427-.2628 0-.5187-.0296-.7641-.0853-1.5351-.3481-2.68034-1.7196-2.68034-3.3574 0-1.6395 1.14524-3.011 2.68034-3.3591.2454-.0557.5013-.0853.7641-.0853 1.9006 0 3.4427 1.5421 3.4427 3.4444z"
                  fill="#fff"
                ></path>
                <path
                  d="m11.649 16.864c0 1.2706-.4438 2.4385-1.1835 3.3574-1.5351-.3481-2.68034-1.7196-2.68034-3.3574 0-1.6395 1.14524-3.011 2.68034-3.3591.7397.919 1.1835 2.0868 1.1835 3.3591z"
                  fill="#000"
                ></path>
                <path
                  d="m28.2699 16.8634c0 1.9006-1.542 3.4427-3.4444 3.4427-.2628 0-.5187-.0296-.7641-.0853-1.5333-.3481-2.6786-1.7196-2.6786-3.3574 0-1.6396 1.1453-3.0111 2.6786-3.3592.2454-.0557.5013-.0853.7641-.0853 1.9024 0 3.4444 1.5421 3.4444 3.4445z"
                  fill="#fff"
                ></path>
                <path
                  d="m25.243 16.864c0 1.2706-.4438 2.4385-1.1835 3.3574-1.5334-.3481-2.6786-1.7196-2.6786-3.3574 0-1.6395 1.1452-3.011 2.6786-3.3591.7397.919 1.1835 2.0868 1.1835 3.3591z"
                  fill="#000"
                ></path>
              </svg>
              <Link onClick={() => setMenuOpened(false)} to="contactus">
                Contact
              </Link>
              <Link onClick={() => setMenuOpened(false)} to="location">
                Location
              </Link>
            </div>
          )}
          <div className="nav-main-responsive">
            <button onClick={() => setMenuOpened(!menuOpened)}>
              {menuOpened ? (
                <span className="material-symbols-outlined">close</span>
              ) : (
                <span className="material-symbols-outlined">menu</span>
              )}
            </button>
            <Link to="dass-coffee/">
              <h3>Dass Coffee</h3>
            </Link>
            <button
              className="nav-main-responsive-shoppingBag"
              onClick={() => setCartOpen(!cartOpen)}
            >
              <span className="material-symbols-outlined" ref={shoppingBagRef2}>
                shopping_bag
              </span>
              <div>{totalItems > 0 && totalItems}</div>
            </button>
          </div>
        </div>
        <div className="nav-right">
          <span className="material-symbols-outlined">search</span>
          <span className="material-symbols-outlined">person</span>
          <button
            className="nav-right-shoppingBag"
            onClick={() => setCartOpen(!cartOpen)}
          >
            <span className="material-symbols-outlined" ref={shoppingBagRef}>
              shopping_bag
            </span>
            <div>{totalItems > 0 && totalItems}</div>
          </button>
        </div>
        {cartOpen && <Cart onClick={setCartOpen} />}
      </nav>
    </>
  );
};
