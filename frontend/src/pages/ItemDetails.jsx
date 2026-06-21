import { Link } from "react-router-dom";

function ItemDetails() {
  const item = {
    title: "Wooden Study Table",
    description:
      "A well-maintained wooden study table suitable for students and professionals.",
    category: "Furniture",
    condition: "Good",
    price: 3500,
    location: "Kozhikode",
    seller: "John Doe",
    postedDate: "2026-06-20",
  };

  return (
    <div className="container">
      <section>
        <h1>{item.title}</h1>

        <img
          src="https://via.placeholder.com/600x400"
          alt={item.title}
        />
      </section>

      <section>
        <h2>Item Information</h2>

        <p>
          <strong>Category:</strong> {item.category}
        </p>

        <p>
          <strong>Condition:</strong> {item.condition}
        </p>

        <p>
          <strong>Price:</strong> ₹{item.price}
        </p>

        <p>
          <strong>Location:</strong> {item.location}
        </p>

        <p>
          <strong>Listed On:</strong> {item.postedDate}
        </p>
      </section>

      <section>
        <h2>Description</h2>

        <p>{item.description}</p>
      </section>

      <section>
        <h2>Seller Information</h2>

        <p>
          <strong>Seller:</strong> {item.seller}
        </p>
      </section>

      <section>
        <button>Add to Wishlist</button>

        <button>Contact Seller</button>

        <button>Report Listing</button>
      </section>

      <section>
        <Link to="/marketplace">
          Back to Marketplace
        </Link>
      </section>
    </div>
  );
}

export default ItemDetails;
