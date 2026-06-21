Second Chance Marketplace Backend

Overview

The Second Chance Marketplace Backend is a RESTful API built with Node.js, Express.js, and MongoDB. It powers the marketplace platform by handling authentication, item management, wishlist functionality, reviews, image uploads, sentiment analysis integration, and administrative operations.

---

Features

Authentication & Authorization

- User Registration
- User Login
- JWT Authentication
- Password Hashing with bcrypt
- Role-Based Access Control

Marketplace Management

- Create Listings
- Update Listings
- Delete Listings
- Browse Listings
- Search & Filter Listings

Wishlist Management

- Add Items to Wishlist
- Remove Items from Wishlist
- View Saved Items

Reviews & Ratings

- Product Reviews
- Seller Ratings
- Review Moderation

Image Management

- Product Image Upload
- Cloudinary Integration
- Image Optimization

Admin Features

- User Management
- Listing Moderation
- Marketplace Analytics
- Report Handling

Security

- JWT Authentication
- Password Encryption
- Helmet Security Headers
- Rate Limiting
- Environment Variable Protection

---

Technology Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcryptjs
- Cloudinary
- Swagger
- Jest
- Supertest

---

Project Structure

backend/
├── config/
├── controllers/
├── middleware/
├── models/
├── routes/
├── services/
├── utils/
├── tests/
├── app.js
├── server.js
├── package.json
├── swagger.json
└── .env.example

---

Environment Variables

Create a ".env" file using ".env.example".

Example:

PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key

---

Installation

Install dependencies:

npm install

Start development server:

npm run dev

Start production server:

npm start

Run tests:

npm test

---

API Documentation

Swagger API documentation is available after starting the server.

Example:

http://localhost:5000/api-docs

---

Testing

The backend uses:

- Jest
- Supertest

for automated API testing.

---

Future Enhancements

- Real-Time Notifications
- AI-Based Recommendations
- Fraud Detection
- Advanced Analytics Dashboard
- Multi-Language Support

---

License

Licensed under the MIT License.
