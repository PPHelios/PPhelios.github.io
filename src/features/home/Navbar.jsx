export const Navbar = () => {
  return (
    <nav>
      <div className="nav-left">
        <div className="logo"></div>
        <h3>Dass Coffee</h3>
      </div>
      <div className="nav-main">
        <a href="#">Shop</a>
        <a href="#">About Us</a>
        <a href="#">Icon</a>
        <a href="#">Contact</a>
        <a href="#">Location</a>
      </div>
      <div className="nav-right">
        <span className="material-symbols-outlined">search</span>
        <span className="material-symbols-outlined">person</span>
        <span className="material-symbols-outlined">shopping_bag</span>
      </div>
    </nav>
  );
};
