import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="container">
      <h2>Second Chance</h2>

      <div>
        <Link to="/">Home</Link>
        <Link to="/marketplace">Marketplace</Link>
        <Link to="/add-item">Sell Item</Link>
        <Link to="/wishlist">Wishlist</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/login">Login</Link>
      </div>
    </nav>
  );
}

export default Navbar;
