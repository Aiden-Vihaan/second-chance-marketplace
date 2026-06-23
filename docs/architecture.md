# System Architecture

## Overview

Second Chance Marketplace is a full-stack marketplace platform for buying and selling second-hand products.

The system follows a microservice architecture consisting of:

- Frontend (React + Vite)
- Backend API (Node.js + Express)
- Sentiment Analysis Microservice
- MongoDB Database

## Architecture Diagram

Frontend
↓
Backend API
↓
MongoDB

Backend API
↓
Sentiment Service

## Components

### Frontend

- User Interface
- Authentication
- Product Listing
- Wishlist
- Profile Management

### Backend

- Authentication
- Product Management
- Reviews
- Wishlist
- Search

### Sentiment Service

- Review Analysis
- Sentiment Classification
- Recommendation Support

## Security

- JWT Authentication
- Password Hashing
- Input Validation
- Rate Limiting
