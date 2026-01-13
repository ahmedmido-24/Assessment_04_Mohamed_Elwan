# Assignment 4 – Express.js

---

## Overview

This assignment focuses on building **Simple CRUD APIs using Express.js**, handling data persistence with the **fs module**, and designing an **ERD diagram** based on given requirements.

---

## Part 1: Simple CRUD Operations Using Express.js

### Data Rules

* User data is stored in a **JSON file** (e.g. `users.json`).
* The **fs module** is used for all read and write operations.
* Data is **not stored or managed using arrays**.

---

### API Endpoints

* **POST** `/user`
  Add a new user to the JSON file. The user email must be unique.

* **PATCH** `/user/:id`
  Update an existing user’s name, age, or email using the user ID from request params.

* **DELETE** `/user/:id`
  Delete a user using the ID provided in params or request body.

* **GET** `/user/getByName`
  Get a user by name using a query parameter.

* **GET** `/user`
  Get all users from the JSON file.

* **GET** `/user/filter`
  Filter users by minimum age using query parameters.

* **GET** `/user/:id`
  Get a user by ID.

---

## Part 2: ERD Diagram – Musicana Records

This part represents an **ERD design** for the Musicana records database.

### Description

* Musicians have personal and contact information.
* Instruments have a unique name and musical key.
* Albums have a unique title, identifier, and copyright date.
* Songs belong to one album and have a unique title and author.
* Musicians can play multiple instruments.
* Songs can be performed by multiple musicians.
* Each album has exactly one producer.
* A producer can produce multiple albums.

---

## Postman Notes

* All endpoints are tested using Postman.
* Requests are named clearly (e.g., *Add User*).
* All changes are saved.
* Postman collection is exported and shared.

**Postman Collection Link:**
(Add link here)

---

## Author

Ahmed Mokhtar
GitHub: [https://github.com/ahmedmido-24](https://github.com/ahmedmido-24)
