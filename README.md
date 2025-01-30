# Donation Management System

A simple Node.js and Express-based donation management system with MongoDB as the database. This project allows users to create, update, retrieve, and delete donation records. It also includes user authentication with hashed passwords and error handling.

---
API: https://jarurat-core-assignment-production-d24a.up.railway.app/api/v1

POSTMAN Collection: https://www.postman.com/warped-astronaut-754683/workspace/assignment1/collection/34165850-0d987681-a034-4ec1-897a-6aeb7b99bc82?action=share&creator=34165850
## Features
- User authentication with jwt, bcrypt for password hashing
- CRUD operations for managing donations
- Error handling with a custom error handler
- Secure cookies for authentication
- Input validation with Mongoose and Validator.js

## Tech Stack
- **Backend:** Node.js, Express.js, MongoDB, Mongoose
- **Authentication:** bcrypt.js, JWT
- **Validation:** Validator.js
- **Error Handling:** Custom middleware

---

## Setup Instructions

### Prerequisites
Ensure you have the following installed:
- **Node.js** (v16 or later recommended)
- **MongoDB** (Local or MongoDB Atlas)
- **npm** or **yarn**

### 1️⃣ Clone the Repository
```bash
git clone git@github.com:gitxAnkit/jarurat-core-assignment.git
cd jarurat-core-assignment
```

### 2️⃣ Install Dependencies
```bash
npm install
```

### 3️⃣ Set Up Environment Variables
Create a `.env` file in the root directory and configure the following:
```env
PORT=5000
MONGO_URI=your_mongo_url
JWT_EXPIRE=5D
COOKIE_EXPIRE=5
JWT_SECRET=your_jwt_secret
NODE_ENV=development
```

### 4️⃣ Start the Server
```bash
npm start
```

The server will start on `http://localhost:5000/api/v1`

---

## API Endpoints

### Authentication
- **POST** `/signup` - Register a new user
- **POST** `/login` - Login user  
- **POST** `/logout` - Logout user


### User
- **GET** `/users` - Get all users
- **PUT** `/user/:userId` - Update user(role) by userId
- **GET** `/user/:userId` - Get user by userId
- **DELETE** `/user/:userId` - Delete user by userId


### Donations
- **POST** `/donations` - Create a donation
- **GET** `/donations` - Retrieve all donations
- **GET** `/donation/:donationId` - Retrieve a specific donation
- **PUT** `/donation/:donationId` - Update a donation
- **DELETE** `/donation/:donationId` - Delete a donation

---
