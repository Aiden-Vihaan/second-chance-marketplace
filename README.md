Second Chance Marketplace

A full-stack sustainable marketplace platform that enables users to buy, sell, and exchange pre-owned household products. The project promotes reuse, reduces waste, and encourages a circular economy by giving products a second life.

Developed as an advanced capstone project using modern web technologies and software engineering practices.

---

Project Overview

Second Chance Marketplace allows users to:

- Create and manage accounts
- List household items for sale
- Search and filter products
- View detailed product information
- Save favourite listings
- Review sellers and products
- Track item availability
- Receive sentiment-based insights on product descriptions and reviews

The platform is designed with scalability, security, and maintainability in mind, following industry-standard backend and frontend architecture.

---

Key Features

Authentication & Security

- User Registration
- User Login
- JWT Authentication
- Password Hashing using bcrypt
- Protected Routes
- Role-Based Authorization

Marketplace Features

- Create Product Listings
- Edit Product Listings
- Delete Product Listings
- Product Details Page
- Advanced Search and Filtering
- Pagination and Sorting
- Product Categories
- Saved/Favourite Items

Sentiment Analysis Service

- Analyse product descriptions
- Analyse user reviews
- Classify sentiment as Positive, Neutral, or Negative
- Sentiment Scoring API

Reviews & Ratings

- Seller Reviews
- Product Reviews
- Rating System

Admin Features

- User Management
- Listing Moderation
- Report Handling

Developer Features

- RESTful API Architecture
- Swagger API Documentation
- Docker Support
- GitHub Actions CI/CD
- Unit and Integration Testing
- Environment Configuration

---

Technology Stack

Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcrypt

Frontend

- React
- Vite
- Axios
- React Router

Sentiment Service

- Node.js
- Express.js
- Sentiment Analysis Library

DevOps & Tools

- Docker
- GitHub Actions
- Postman
- Swagger
- Git

---

Project Structure

second-chance-marketplace/

├── backend/
├── frontend/
├── sentiment-service/
├── docs/
├── .github/
├── docker-compose.yml
├── .env.example
└── README.md

---

Architecture

The application follows a modular architecture consisting of:

1. Frontend Client Application
2. Backend REST API
3. Sentiment Analysis Microservice
4. MongoDB Database

This separation improves scalability, maintainability, and deployment flexibility.

---

API Modules

Authentication

- Register User
- Login User
- Profile Management

Items

- Create Item
- Update Item
- Delete Item
- Get Item Details
- List Available Items

Search

- Keyword Search
- Category Filtering
- Price Filtering
- Condition Filtering

Reviews

- Create Review
- View Reviews

Sentiment

- Analyse Product Descriptions
- Analyse Reviews

---

Security Practices

- JWT Authentication
- Password Hashing
- Input Validation
- Rate Limiting
- Secure Environment Variables
- Error Handling Middleware

---

Future Enhancements

- AI-Based Product Recommendations
- Real-Time Chat Between Buyers and Sellers
- Cloud Image Storage
- Email Notifications
- Mobile Application
- Multi-Language Support
- Analytics Dashboard

---

Learning Objectives

This project demonstrates:

- Backend Development
- REST API Design
- Database Design
- Authentication & Authorization
- Microservice Architecture
- Full-Stack Development
- Software Engineering Best Practices
- DevOps Fundamentals

---

Author

Aiden Vihaan

---

License

This project is licensed under the MIT License.
