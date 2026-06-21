import { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Login Data:", formData);

    // Future API Integration
  };

  return (
    <div className="container">
      <section>
        <h1>Welcome Back</h1>

        <p>
          Sign in to access your account, manage listings,
          and connect with buyers and sellers.
        </p>

        <form onSubmit={handleSubmit}>
          <div>
            <label>Email Address</label>

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label>Password</label>

            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit">
            Login
          </button>
        </form>

        <p>
          Don't have an account?{" "}
          <Link to="/register">
            Register Here
          </Link>
        </p>
      </section>
    </div>
  );
}

export default Login;
