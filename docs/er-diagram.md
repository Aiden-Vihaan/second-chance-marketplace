# Entity Relationship Diagram

## User

- _id
- name
- email
- password
- role

## Item

- _id
- title
- description
- price
- category
- condition
- images
- seller

## Review

- _id
- rating
- comment
- sentiment
- user
- item

## Wishlist

- _id
- user
- items

## Relationships

User → Items (One to Many)

User → Reviews (One to Many)

User → Wishlist (One to One)

Item → Reviews (One to Many)
