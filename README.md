# Authorization & Authentication App - Practise

This project is a **full-stack application** demonstrating **user authentication and authorization** using **React (frontend)**, **Node.js + Express (backend)**, **MongoDB (database)**, and **JWT (JSON Web Tokens)** for secure login, signup, profile management, and protected routes.

---

## **Features**

- **User Signup:** Create a new account with email, name, and password.
- **User Login:** Authenticate existing users and generate a JWT token.
- **Protected Routes:** Only logged-in users can access their profile, update details, or delete account.
- **Profile Management:**
  - View profile information
  - Update name, email, or password
  - Delete account
- **JWT-based Authentication:** Secure API endpoints using JSON Web Tokens.
- **Frontend Route Protection:** React `PrivateRoute` component prevents unauthorized access.

---

## **Tech Stack**

- **Frontend:** React.js
- **Backend:** Node.js, Express
- **Database:** MongoDB (Mongoose)
- **Authentication:** JWT, bcryptjs
- **HTTP Requests:** Axios
- **Environment Management:** dotenv
- **Version Control:** Git, GitHub

---

## **Setup Instructions**

### **Backend**

1. Navigate to backend folder:
2. Install dependencies:

npm install


Create a .env file in the backend folder:

PORT=5000
MONGO_CONN=<your_mongodb_connection_string>
JWT_SECRET=<your_secret_key>


Start the backend server:

npm run dev


Backend will run at http://localhost:5000

Frontend

Navigate to frontend folder:

cd frontend


Install dependencies:

npm install


Start the frontend server:

npm start


Frontend will run at http://localhost:3000

```bash
cd backend
