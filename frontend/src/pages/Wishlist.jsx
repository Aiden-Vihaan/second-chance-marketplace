import { Link } from "react-router-dom";

function Wishlist() {
  const wishlistItems = [
    {
      id: 1,
      title: "Wooden Study Table",
      price: 3500,
      condition: "Good",
      location: "Kozhikode",
    },
    {
      id: 2,
      title: "Office Chair",
      price: 2000,
      condition: "Like New",
      location: "Bangalore",
    },
  ];

  return (
    <div className="container">
      <section>
        <h1>My Wishlist</h1>

        <p>
          Keep track of items you're interested in and
          revisit them anytime.
        </p>
      </section>

      {wishlistItems.length === 0 ? (
        <section>
          <h2>Your wishlist is empty</h2>

          <Link to="/marketplace">
            Browse Marketplace
          </Link>
        </section>
      ) : (
        <section>
          {wishlistItems.map((item) => (
            <div key={item.id}>
              <h3>{item.title}</h3>

              <p>
                <strong>Price:</strong> ₹{item.price}
              </p>

              <p>
                <strong>Condition:</strong> {item.condition}
              </p>

              <p>
                <strong>Location:</strong> {item.location}
              </p>

              <div>
                <Link to={`/item/${item.id}`}>
                  View Details
                </Link>

                <button>
                  Remove
                </button>
              </div>
            </div>
          ))}
        </section>
      )}
    </div>
  );
}

export default Wishlist;
