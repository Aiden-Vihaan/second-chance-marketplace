import { Link } from "react-router-dom";

function ItemCard({ item }) {
  return (
    <div>
      <img
        src={item.image}
        alt={item.title}
      />

      <h3>{item.title}</h3>

      <p>₹{item.price}</p>

      <p>{item.condition}</p>

      <Link to={`/item/${item.id}`}>
        View Details
      </Link>
    </div>
  );
}

export default ItemCard;
