import { Routes, Route } from "react-router-dom";

function Home() {
return (
<div>
<h1>Second Chance Marketplace</h1>
<p>Buy, Sell, Reuse, Sustain.</p>
</div>
);
}

function Login() {
return <h1>Login Page</h1>;
}

function Register() {
return <h1>Register Page</h1>;
}

function Profile() {
return <h1>User Profile</h1>;
}

function Marketplace() {
return <h1>Marketplace</h1>;
}

function Wishlist() {
return <h1>Wishlist</h1>;
}

function NotFound() {
return <h1>404 - Page Not Found</h1>;
}

function App() {
return (
<Routes>
<Route path="/" element={<Home />} />
<Route path="/marketplace" element={<Marketplace />} />
<Route path="/login" element={<Login />} />
<Route path="/register" element={<Register />} />
<Route path="/profile" element={<Profile />} />
<Route path="/wishlist" element={<Wishlist />} />
<Route path="*" element={<NotFound />} />
</Routes>
);
}

export default App;
