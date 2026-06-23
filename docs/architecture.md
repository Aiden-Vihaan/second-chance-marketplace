# Second Chance Marketplace Architecture

## Overview

Second Chance Marketplace is a full-stack web application that enables users to buy and sell second-hand products.

The application follows a microservice-based architecture.

## System Components

### Frontend

- React
- Vite
- React Router
- Axios

### Backend API

- Node.js
- Express.js
- MongoDB
- JWT Authentication

### Sentiment Service

- Node.js
- Express.js
- NLP Sentiment Analysis

### Database

- MongoDB Atlas

## Architecture Flow

User
↓
Frontend (React)
↓
Backend API (Express)
↓
MongoDB

Backend API
↓
Sentiment Service

## Security

- JWT Authentication
- Password Hashing
- Input Validation
- Rate Limiting
- CORS Protection

## Future Improvements

- Redis Caching
- Elasticsearch
- AI Recommendations
- Real-time Chat
