
## 1. Project Description

The Professional Boilerplate is a backend project developed using Node.js, TypeScript, Express.js, and MySQL. Its purpose is to provide a clean and organized foundation for building web applications and REST APIs.

This project includes centralized error handling, request validation, structured logging, security middleware, database migrations, seeders, and User CRUD operations.

## 2. Technologies Used

- **Node.js** – JavaScript runtime environment
- **TypeScript** – Adds type safety to JavaScript
- **Express.js** – Backend web framework
- **MySQL** – Relational database
- **TypeORM** – Database management and object-relational mapping
- **Joi** – Request and environment validation
- **Winston** – Application logging
- **Helmet** – Security middleware
- **CORS** – Controls cross-origin requests
- **bcrypt** – Password hashing
- **Postman** – API testing

## 3. Features

- Organized and professional project folder structure
- TypeScript configuration with strict mode
- Environment variable validation using Joi
- Centralized error handling
- Custom error classes
- Request validation using Joi
- Request logging using Winston
- Security middleware using Helmet and CORS
- API rate limiting
- MySQL database connection using TypeORM
- Database migrations and seeders
- User CRUD operations:
  - Create a user
  - View all users
  - View a user by ID
  - Update a user
  - Delete a user
- Health check endpoint
- Consistent JSON API responses

## 4. Project Setup Instructions

### Prerequisites

Before running the project, make sure you have installed:

- Node.js (v20 or v22 LTS)
- MySQL Server
- Visual Studio Code
- Postman
- Git

### Step 1: Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/professional-boilerplate.git
```

Open the project folder:

```bash
cd professional-boilerplate
```

### Step 2: Install Dependencies

```bash
npm install
```

### Step 3: Create the Database

Open MySQL Workbench and execute:

```sql
CREATE DATABASE boilerplate_db;
```

### Step 4: Configure Environment Variables

Create a `.env` file in the root directory and add the following:

```env
NODE_ENV=development
PORT=3000

DB_HOST=localhost
DB_PORT=3306
DB_USERNAME=root
DB_PASSWORD=your_mysql_password
DB_DATABASE=boilerplate_db

FRONTEND_URL=http://localhost:4200
```

Replace `your_mysql_password` with your actual MySQL password.

### Step 5: Run Database Migrations

```bash
npm run migration:run
```

### Step 6: Run Database Seeders

```bash
npm run seed
```

### Step 7: Start the Development Server

```bash
npm run dev
```

The server should run at:

```text
http://localhost:3000
```

Health check:

```text
http://localhost:3000/health
```

## 5. Environment Variables Documentation

| Variable | Description | Default / Example |
|---|---|---|
| NODE_ENV | Application environment | development |
| PORT | Server port | 3000 |
| DB_HOST | MySQL host | localhost |
| DB_PORT | MySQL port | 3306 |
| DB_USERNAME | MySQL username | root |
| DB_PASSWORD | MySQL password | Your MySQL password |
| DB_DATABASE | Database name | boilerplate_db |
| FRONTEND_URL | Allowed frontend URL for CORS | http://localhost:4200 |

**Important:** Do not upload your actual `.env` file to GitHub because it contains private database credentials. Use `.env.example` as a template instead.

## 6. API Endpoints Documentation

Base URL:

```text
http://localhost:3000
```

### Health Check

| Method | Endpoint | Description |
|---|---|---|
| GET | `/health` | Checks the server and database connection |

### User Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/users` | Retrieves all users |
| POST | `/api/users` | Creates a new user |
| GET | `/api/users/:id` | Retrieves a user by ID |
| PUT | `/api/users/:id` | Updates a user |
| DELETE | `/api/users/:id` | Deletes a user |

### Example: Create a User

**POST** `/api/users`

Request body:

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "Password123",
  "age": 30
}
```

Expected response: `201 Created`

### Example: Update a User

**PUT** `/api/users/1`

Request body:

```json
{
  "name": "Updated Name"
}
```

Expected response: `200 OK`

### Pagination Example

```text
GET /api/users?page=1&limit=10&sort=createdAt&order=DESC
```

## 7. Database Migrations and Seeders

This project uses TypeORM migrations to manage database changes instead of relying on automatic schema synchronization.

### Migration Commands

Run existing migrations:

```bash
npm run migration:run
```

Revert the latest migration:

```bash
npm run migration:revert
```

Generate a migration using the migration generation script configured in `package.json`. For example, with the TypeORM 0.3 CLI:

```bash
npm run migration:generate -- src/migrations/InitialSchema
```

### Seeder Command

Run the seeders:

```bash
npm run seed
```

The user seeder inserts two sample users:

| Name | Email |
|---|---|
| Admin User | admin@example.com |
| Test User | test@example.com |

The passwords are hashed using bcrypt before being stored in the database.

## 8. Logging

The project uses Winston for application and request logging.

Log files are stored in the `logs/` directory:

- `logs/combined.log` – Contains application and request logs.
- `logs/error.log` – Contains error logs.

These files help developers monitor application activity and troubleshoot problems.

## 9. Reflection Questions and Answers

### 1. What was the most challenging part of building this boilerplate? How did you overcome it?

The most challenging part for me was connecting all the components, especially TypeORM, MySQL, validation, and error handling. I overcame this by following the steps carefully, checking the error messages, and testing each feature before moving to the next part.

### 2. How does this boilerplate differ from your Midterm project? What specific improvements did you make?

Compared to my Midterm project, this boilerplate has a more organized folder structure and better backend architecture. I added centralized error handling, Joi validation, Winston logging, security middleware, and TypeORM migrations. These improvements make the code easier to maintain and understand.

### 3. Why is centralized error handling better than try-catch in every controller?

Centralized error handling makes the code cleaner because errors are handled in one place instead of repeating try-catch blocks in every controller. It also provides consistent error responses and makes debugging easier.

### 4. How does request validation with Joi improve security and code quality?

Joi checks user input before it reaches the application logic. It helps prevent invalid or incomplete data from being processed. It also improves code quality because developers can define clear rules for every request.

### 5. What's the difference between synchronize: true and migrations? Why are migrations essential for production?

`synchronize: true` automatically changes the database structure based on the entities. Migrations allow developers to control database changes through specific files. Migrations are important in production because they provide a safer and more organized way to update database structures without automatically changing everything.

### 6. How does structured logging (Winston) help in production debugging compared to console.log?

Winston provides organized logs with timestamps, log levels, and additional information. Unlike simple console.log statements, Winston can save logs into files and separate errors from normal application activity. This makes it easier to find and understand problems.

### 7. If you had to add a new feature (e.g., Product CRUD), how would you use this boilerplate? What would you need to add?

I would follow the same structure used for the User CRUD feature. I would create a Product entity, DTO validation schemas, a service, a controller, and routes. I would also create a database migration for the Product table and test the new endpoints using Postman.

### 8. What additional features would you add to make this boilerplate even more production-ready?

I would add JWT authentication, role-based access control, automated testing, API documentation using Swagger, and better deployment configuration. These features would improve security, reliability, and maintainability.

---

## 10. Conclusion

Building this professional boilerplate helped me understand how to organize a backend application using Node.js, TypeScript, Express.js, and MySQL. I also learned the importance of validation, error handling, logging, security, and database migrations.

This project will serve as a foundation for developing more advanced backend applications and my future projects.



##Activity 9

# Professional Boilerplate API with JWT Authentication

## 📌 Project Description

The **Professional Boilerplate API** is a RESTful API built using Node.js, Express.js, TypeScript, TypeORM, and MySQL.

This project provides basic user and task management features with secure authentication. It uses **JSON Web Tokens (JWT)** to verify users before allowing access to protected endpoints.

It also uses **bcrypt** to securely hash user passwords before saving them to the database.

### Technologies Used

- **Node.js** – JavaScript runtime environment.
- **Express.js** – Framework for building the API.
- **TypeScript** – Adds type safety to JavaScript.
- **MySQL** – Database management system.
- **TypeORM** – Manages database operations and relationships.
- **JWT** – Handles user authentication.
- **bcrypt** – Protects user passwords through hashing.
- **Joi** – Validates user input.
- **Postman** – Used for testing API endpoints.

---

## 🔐 Authentication Flow

This project uses JWT (JSON Web Token) for user authentication.

The authentication process works as follows:

1. The user registers an account using their name, email, and password.
2. The system checks and validates the submitted information.
3. The password is hashed using bcrypt before being saved to the database.
4. The user logs in using their email and password.
5. The system compares the submitted password with the hashed password in the database.
6. If the credentials are correct, the server generates a JWT token.
7. The user receives the token as a response.
8. The user includes the token when accessing protected endpoints.
9. The authentication middleware verifies the token before allowing access.

### Authentication Diagram

```text
        USER
          |
          v
      REGISTER
          |
          v
   Hash Password (bcrypt)
          |
          v
      DATABASE
          |
          v
        LOGIN
          |
          v
  Verify Email & Password
          |
          v
    Generate JWT Token
          |
          v
    Receive Access Token
          |
          v
  Access Protected Routes
          |
          v
   Verify Token (Middleware)
          |
          v
    Allow or Deny Request
```

---

## 🔑 How to Get a JWT Token

To get an authentication token, you must first log in using your registered account.

### Login Endpoint

**Method:** POST

**Endpoint:** `/api/auth/login`

**Request Body:**

```json
{
  "email": "student@example.com",
  "password": "yourpassword"
}
```

### Successful Response

The server should return a JWT token after successful login.

Example:

```json
{
  "success": true,
  "message": "Login successful",
  "data": {
    "token": "your_jwt_token_here"
  }
}
```

**Important:** The response structure above is an example. Use the actual response format implemented in your project.

If the email or password is incorrect, the server should return an authentication error.

---

## 🛡️ How to Use the JWT Token

After logging in, copy the JWT token returned by the server.

You need to include this token in the Authorization header when accessing protected endpoints.

### Authorization Header

```http
Authorization: Bearer YOUR_JWT_TOKEN
```

### Using Postman

1. Open Postman.
2. Select the API endpoint you want to test.
3. Open the **Authorization** tab.
4. Select **Bearer Token** as the authentication type.
5. Paste your JWT token into the token field.
6. Click **Send**.

The server will check your token using authentication middleware.

- Valid token: The request is allowed.
- Invalid token: The server returns an authentication error.
- Missing token: The server denies access to the protected endpoint.

---

## 🌐 Public vs. Protected Endpoints

### Public Endpoints

Public endpoints can be accessed without providing a JWT token.

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/auth/register` | Register a new user |
| POST | `/api/auth/login` | Log in and receive a JWT token |

### Protected Endpoints

Protected endpoints require a valid JWT token in the Authorization header.

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/users` | Get all users |
| GET | `/api/users/:id` | Get a specific user |
| POST | `/api/users` | Create a user |
| PUT | `/api/users/:id` | Update a user |
| DELETE | `/api/users/:id` | Delete a user |
| GET | `/api/users/:userId/tasks` | Get tasks belonging to a user |
| POST | `/api/users/:userId/tasks` | Create a task for a user |
| DELETE | `/api/tasks/:id` | Delete a task |

**Note:** These are the intended endpoint classifications for this documentation. Make sure the protected routes actually use your JWT authentication middleware. The exact route paths must also match your application's route configuration.

---

## 🧠 Reflection Questions and Answers

### 1. What is the difference between authentication and authorization? Give a real-world example of each.

Authentication is the process of checking who a person is. For example, logging into Facebook using an email and password proves your identity.

Authorization determines what a person is allowed to access. For example, a regular employee can view their own information, but only the administrator can manage all employee records.

### 2. Why is JWT considered "stateless" and how does that benefit scalability?

JWT is considered stateless because the server does not need to store every user's login session. The token contains information that the server can verify.

This helps scalability because multiple servers can verify the same token without sharing session information.

### 3. What are the three parts of a JWT token and what does each part do?

A JWT has three parts:

- **Header** – Contains information about the token type and signing algorithm.
- **Payload** – Contains information or claims about the user, such as their user ID.
- **Signature** – Verifies that the token has not been changed.

These three parts are separated by dots (`.`).

### 4. Why should you never put sensitive data (like passwords) in the JWT payload?

JWT payloads are encoded, not encrypted by default. This means someone who gets the token can decode and read its contents.

Passwords and other sensitive information should never be included because they could be exposed.

### 5. How does bcrypt protect user passwords? What is the purpose of the "salt" and "rounds"?

Bcrypt protects passwords by converting them into secure hashes before saving them in the database.

- **Salt** – Random data added during hashing to make password hashes unique.
- **Rounds** – Controls how much processing bcrypt performs. More rounds make password guessing slower.

This makes it harder for attackers to discover the original passwords.

### 6. What happens if someone steals a JWT token? How can you mitigate this risk?

If someone steals a JWT token, they may use it to access protected endpoints as the original user until the token expires or is otherwise rejected.

We can reduce this risk by:

- Using short-lived access tokens.
- Using HTTPS.
- Keeping tokens secure.
- Avoiding sharing tokens with other people.
- Implementing token revocation or refresh token rotation.

### 7. Why is it important to use HTTPS when transmitting JWT tokens?

HTTPS encrypts the communication between the client and the server.

Without HTTPS, attackers on an insecure network may be able to intercept JWT tokens. HTTPS helps protect tokens and other sensitive information from being stolen during transmission.

### 8. What is the difference between a short-lived access token and a long-lived refresh token? When would you use each?

An access token is used to access protected API endpoints. It has a short expiration time to reduce the damage if someone steals it.

A refresh token has a longer expiration time and is used to request a new access token without requiring the user to log in again.

Access tokens are used for normal API requests, while refresh tokens are used when the access token expires.

### 9. How does the auth middleware know which user is making the request?

The authentication middleware reads the JWT from the Authorization header.

It verifies the token using the server's secret key. If the token is valid, the middleware reads the user information from its payload.

It can then attach the authenticated user's information to the request so other controllers can identify the user.

### 10. If you had to implement role-based authorization (e.g., admin vs. regular user), how would you modify your current setup?

I would add a `role` column to the User entity. The role could contain values such as `admin` and `user`.

When a user logs in, the system can include their role in the JWT payload.

I would also create an authorization middleware to check the user's role before allowing access to certain endpoints.

For example, administrators can manage all users, while regular users can only access their own information.

---

## 🔒 Security Best Practices

This project follows important security practices:

- Passwords are hashed using bcrypt.
- JWT tokens are used to protect API endpoints.
- Joi is used to validate incoming requests.
- Password fields are hidden when retrieving user records.
- Authentication middleware verifies tokens before accessing protected resources.
- Environment variables are used to store sensitive configuration.
- HTTPS should be enabled when deploying the API.

---

## 👨‍💻 Author

**Student Developer**

Project: Professional Boilerplate API with JWT Authentication

---

## 📄 Conclusion

Through this project, I learned how to build a RESTful API with user authentication and security features.

I also learned how JWT works, how bcrypt protects passwords, and how authentication middleware protects API endpoints.

This project helped me understand the importance of API security and how to build a more reliable backend application.