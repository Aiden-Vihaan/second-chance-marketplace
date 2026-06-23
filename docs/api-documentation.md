# API Documentation

## Authentication

### Register

POST /api/auth/register

### Login

POST /api/auth/login

---

## Items

### Get All Items

GET /api/items

### Get Item By ID

GET /api/items/:id

### Create Item

POST /api/items

### Update Item

PUT /api/items/:id

### Delete Item

DELETE /api/items/:id

---

## Wishlist

### Get Wishlist

GET /api/wishlist

### Add To Wishlist

POST /api/wishlist

### Remove From Wishlist

DELETE /api/wishlist/:id

---

## Reviews

### Add Review

POST /api/reviews

### Get Reviews

GET /api/reviews/:itemId

---

## Search

### Search Items

GET /api/search?q=laptop
