import { Link } from "react-router-dom";

function Profile() {
  const user = {
    name: "Aiden Vihaan",
    email: "aiden@example.com",
    location: "Kozhikode, Kerala",
    joinedDate: "2026-01-01",
    listings: 0,
    wishlistItems: 0,
  };

  return (
    <div className="container">
      <section>
        <h1>My Profile</h1>

        <div>
          <img
            src="https://via.placeholder.com/150"
            alt="Profile"
          />

          <h2>{user.name}</h2>

          <p>{user.email}</p>

          <p>{user.location}</p>

          <p>
            Member Since: {user.joinedDate}
          </p>
        </div>
      </section>

      <section>
        <h2>Account Statistics</h2>

        <div>
          <div>
            <h3>Listings</h3>
            <p>{user.listings}</p>
          </div>

          <div>
            <h3>Wishlist</h3>
            <p>{user.wishlistItems}</p>
          </div>
        </div>
      </section>

      <section>
        <h2>Quick Actions</h2>

        <div>
          <Link to="/add-item">
            Add New Listing
          </Link>
        </div>

        <div>
          <Link to="/wishlist">
            View Wishlist
          </Link>
        </div>

        <div>
          <Link to="/marketplace">
            Browse Marketplace
          </Link>
        </div>
      </section>

      <section>
        <h2>My Listings</h2>

        <p>
          Your active marketplace listings will appear here.
        </p>
      </section>

      <section>
        <button>
          Edit Profile
        </button>

        <button>
          Logout
        </button>
      </section>
    </div>
  );
}

export default Profile;
