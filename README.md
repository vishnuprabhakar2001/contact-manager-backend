# Contact Manager Backend Project

## Overview

The **Contact Manager** is a backend RESTful API project built using **Node.js** and **Express.js**. It provides secure user authentication and authorization, allowing users to manage their personal contacts. Each user can register, log in, and perform CRUD (Create, Read, Update, Delete) operations only on their own contacts.

This project demonstrates core backend development concepts such as **JWT-based authentication**, **role-based data access**, **MongoDB data modeling**, and **secure API design**.

---

## Features

* User Registration and Login
* JWT-based Authentication
* Get Current Logged-in User Details
* Create Contacts (User-specific)
* Get All Contacts Created by the Logged-in User
* Get Contact by Contact ID (Only Own Contacts)
* Update Own Contact
* Delete Own Contact
* Secure Routes using Middleware

---

## Tech Stack

* **Runtime:** Node.js
* **Framework:** Express.js
* **Database:** MongoDB
* **ODM:** Mongoose
* **Authentication:** JSON Web Token (JWT)
* **Middleware & Utilities:**

  * cors
  * cookie-parser
  * express-async-handler
  * bcrypt

---

## Project Structure

```
contact-manager/
│
├── controllers/
│   ├── userController.js
│   └── contactController.js
│
├── models/
│   ├── userModel.js
│   └── contactModel.js
│
├── routes/
│   ├── userRoutes.js
│   └── contactRoutes.js
│
├── middleware/
│   ├── authMiddleware.js
│   └── errorHandler.js
│
├── config/
│   └── dbConnection.js
│
├── .env
├── server.js
└── package.json
```

---

## Data Models

### User Model

Fields:

* `username` (String, required)
* `email` (String, required, unique)
* `password` (String, required, hashed)

### Contact Model

Fields:

* `user_id` (ObjectId, reference to User)
* `name` (String, required)
* `email` (String)
* `phone` (String, required)

---

## Authentication & Authorization

* Authentication is implemented using **JWT**.
* On successful login, a JWT token is generated and sent to the client.
* Protected routes require a valid token.
* Authorization ensures that users can only access and modify **their own contacts**.

---

## API Endpoints

### User Routes

| Method | Endpoint              | Description                |
| ------ | --------------------- | -------------------------- |
| POST   | `/api/users/register` | Register a new user        |
| POST   | `/api/users/login`    | Login user                 |
| GET    | `/api/users/current`  | Get current logged-in user |

### Contact Routes (Protected)

| Method | Endpoint            | Description                        |
| ------ | ------------------- | ---------------------------------- |
| GET    | `/api/contacts`     | Get all contacts of logged-in user |
| POST   | `/api/contacts`     | Create a new contact               |
| GET    | `/api/contacts/:id` | Get contact by ID (own only)       |
| PUT    | `/api/contacts/:id` | Update contact (own only)          |
| DELETE | `/api/contacts/:id` | Delete contact (own only)          |

---

## Environment Variables

Create a `.env` file in the root directory and add:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```

---

## Installation & Setup

1. Clone the repository

   ```bash
   git clone <repository-url>
   ```

2. Install dependencies

   ```bash
   npm install
   ```

3. Configure environment variables in `.env`

4. Start the server

   ```bash
   npm run dev
   ```

---

## Key Learnings

* Building secure REST APIs using Express.js
* JWT-based authentication and route protection
* MongoDB schema design with Mongoose
* User-specific data access and authorization
* Middleware-based error handling

---

## Future Enhancements

* Refresh token implementation
* Pagination and search for contacts
* Role-based access control (RBAC)
* API documentation using Swagger

---

## Author

**Vishnu Prabhakar**
Backend Developer (Fresher)
