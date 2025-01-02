# Course Management API

A robust Course Management API built with Node.js and MongoDB. It supports user and admin authentication, course creation and management, and purchase tracking. The project is designed with a modular code structure, featuring well-organized routes and middleware for efficient API handling.

---

## Features

### User Authentication
- User signup, login, and purchase tracking.

### Admin Authentication
- Admin signup, login, course creation, and course management.

### Course Management
- Create courses.
- Update courses.
- Retrieve courses in bulk.

### Middleware
- JWT-based authentication for users and admins.

### Schema Validation
- Input validation using the Zod library.

---

## Technologies Used

- **Node.js**: Backend runtime.
- **Express**: Web framework for handling API routes.
- **MongoDB**: Database for storing user, admin, and course data.
- **Mongoose**: ODM for MongoDB.
- **Zod**: Schema validation for request bodies.
- **JSON Web Token (JWT)**: Authentication and token verification.
- **bcrypt**: Password hashing for secure storage.
- **dotenv**: Environment variable management.

---

## Prerequisites

1. Install **Node.js** on your system.
2. Have a **MongoDB instance** (local or cloud).
3. Configure environment variables:
   - `db_url2`: MongoDB connection URL.
   - `jwtsec`: JWT secret for user authentication.
   - `jwtsecadmin`: JWT secret for admin authentication.

---
