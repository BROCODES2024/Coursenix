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

## Setup Instructions

Step 1: Clone the repository
git clone <repository-url>
cd <repository-folder>

Step 2: Install dependencies
npm install

Step 3: Configure environment variables
Create a .env file in the root directory and add the following:
db_url2=<your-mongo-db-url>
jwtsec=<user-jwt-secret>
jwtsecadmin=<admin-jwt-secret>

Step 4: Run the server
node index.js

# The server will start on http://localhost:3000


---

## API Endpoints

### User Routes (`/api/v1/user`)
- **POST /signup**: User registration.
- **POST /signin**: User login.
- **GET /purchases**: Retrieve user purchase history.

### Admin Routes (`/api/v1/admin`)
- **POST /signup**: Admin registration.
- **POST /signin**: Admin login.
- **POST /create-course**: Create a new course (requires authentication).
- **PUT /update-course**: Update an existing course (requires authentication).
- **GET /course/bulk**: Retrieve all courses created by the admin (requires authentication).

### Course Routes (`/api/v1/course`)
- Placeholder for potential course-related endpoints for users.

---

## Code Structure

- **index.js**: Entry point for the application, sets up routes and connects to MongoDB.
- **db.js**: Defines MongoDB schemas and models for users, admins, courses, and purchases.
- **routes/**:
  - `user.js`: Handles user-related endpoints.
  - `admin.js`: Handles admin-related endpoints.
  - `course.js`: Placeholder for course-related endpoints.
- **middlewares/**:
  - `adminmw.js`: Middleware for admin authentication.
  - `usermw.js`: Middleware for user authentication.

---

