# 🧑‍🎓 Student Record Management API

A production-style REST API for managing student records using **Node.js**, **Express**, **PostgreSQL**, and **Prisma** — with full CRUD operations, validation, error handling, and seed data for 1,000+ students.

---

## Features

- ✅ Full CRUD for students
- ✅ Zod-based input validation
- ✅ Centralized error handling
- ✅ Modular routing & controller structure
- ✅ Prisma ORM with PostgreSQL
- ✅ Seed script for 1,000+ fake student records
- ✅ Postman collection for instant API testing

---

## 🛠 Tech Stack

- **Node.js** + **Express**
- **PostgreSQL** + **Prisma**
- **Zod** (validation)
- **dotenv**
- **Postman** for API testing
- **@faker-js/faker** for seed data

---

## Setup Instructions

### 1. Clone the Repo

```bash
git clone https://github.com/your-username/student-management-api.git
cd student-management-api
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment

Create a `.env` file at the root:

```
DATABASE_URL="postgresql://postgres:yourpassword@localhost:5432/student_db"
```

### 4. Run Migrations

```bash
npx prisma migrate dev --name init
```

### 5. Seed the Database

```bash
npm run seed
```

### 6. Start the Server

```bash
npm run dev
```

---

## 🔁 API Endpoints

| Method | Endpoint            | Description        |
| ------ | ------------------- | ------------------ |
| GET    | `/api/students`     | Get all students   |
| GET    | `/api/students/:id` | Get student by ID  |
| POST   | `/api/students`     | Create new student |
| PUT    | `/api/students/:id` | Update student     |
| DELETE | `/api/students/:id` | Delete student     |

---

## Postman Testing

Import this file into Postman:

```
postman/student-api.postman_collection.json
```

You can run all 5 endpoints instantly with ready-to-use requests.

---
