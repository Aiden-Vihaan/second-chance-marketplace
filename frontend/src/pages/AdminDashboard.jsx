function AdminDashboard() {
  return (
    <div className="container">
      <h1>Admin Dashboard</h1>

      <section>
        <h2>Platform Overview</h2>

        <div>
          <div>
            <h3>Total Users</h3>
            <p>0</p>
          </div>

          <div>
            <h3>Total Listings</h3>
            <p>0</p>
          </div>

          <div>
            <h3>Active Listings</h3>
            <p>0</p>
          </div>

          <div>
            <h3>Reported Listings</h3>
            <p>0</p>
          </div>
        </div>
      </section>

      <section>
        <h2>Administration Actions</h2>

        <ul>
          <li>Manage Users</li>
          <li>Review Reported Items</li>
          <li>Monitor Marketplace Activity</li>
          <li>View Analytics</li>
          <li>Manage Categories</li>
        </ul>
      </section>

      <section>
        <h2>Recent Activity</h2>

        <p>
          Marketplace activity logs will appear here.
        </p>
      </section>
    </div>
  );
}

export default AdminDashboard;
