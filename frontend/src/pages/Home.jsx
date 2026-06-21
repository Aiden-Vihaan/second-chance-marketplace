import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container">
      <section>
        <h1>Second Chance Marketplace</h1>

        <p>
          Give pre-owned items a second life. Buy, sell, and discover quality
          household products while contributing to a more sustainable future.
        </p>

        <div>
          <Link to="/marketplace">
            Browse Marketplace
          </Link>

          <Link to="/add-item">
            Sell an Item
          </Link>
        </div>
      </section>

      <section>
        <h2>Why Choose Second Chance?</h2>

        <ul>
          <li>Reduce household waste</li>
          <li>Save money on quality products</li>
          <li>Support sustainable living</li>
          <li>Connect with local communities</li>
        </ul>
      </section>

      <section>
        <h2>Marketplace Categories</h2>

        <ul>
          <li>Furniture</li>
          <li>Electronics</li>
          <li>Books</li>
          <li>Home Appliances</li>
          <li>Clothing</li>
        </ul>
      </section>

      <section>
        <h2>Platform Statistics</h2>

        <div>
          <div>
            <h3>Users</h3>
            <p>0+</p>
          </div>

          <div>
            <h3>Listings</h3>
            <p>0+</p>
          </div>

          <div>
            <h3>Successful Exchanges</h3>
            <p>0+</p>
          </div>
        </div>
      </section>

      <section>
        <h2>Our Mission</h2>

        <p>
          Second Chance Marketplace promotes sustainability by extending the
          lifecycle of household products and encouraging responsible
          consumption.
        </p>
      </section>
    </div>
  );
}

export default Home;
