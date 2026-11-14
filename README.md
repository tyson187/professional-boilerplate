
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
