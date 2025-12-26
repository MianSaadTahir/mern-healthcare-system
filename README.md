# MERN Healthcare Appointment System

This is a full-stack MERN (MongoDB, Express, React, Node.js) application for a Healthcare Appointment Management System.

## 🚀 Features

-   User authentication (patients, doctors, and admins) with JWT.
-   Patients can book, view, and cancel appointments.
-   Doctors can manage their profiles and appointments.
-   Admins can manage users, doctors, and appointments.
-   Responsive design.

## 🛠️ Tech Stack

-   **Frontend:** React.js, Context API, React Router, Axios
-   **Backend:** Node.js, Express.js, MongoDB, Mongoose, JWT
-   **Database:** MongoDB Atlas

## 📦 Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/your-username/mern-healthcare-system.git
    cd mern-healthcare-system
    ```

2.  Install server dependencies:
    ```bash
    cd server
    npm install
    ```

3.  Install client dependencies:
    ```bash
    cd ../client
    npm install
    ```

## ⚙️ Environment Variables

Create a `.env` file in the `server` directory and add the following variables:

```
MONGO_URI=<your_mongodb_uri>
JWT_SECRET=<your_jwt_secret>
PORT=5000
```

## ▶️ Running the Application

1.  Start the backend server:
    ```bash
    cd server
    npm run server
    ```

2.  Start the frontend client:
    ```bash
    cd client
    npm start
    ```

##  API Endpoints

### Auth

-   `POST /api/auth` - Authenticate user and get token
-   `GET /api/auth` - Get logged in user

### Users

-   `POST /api/users` - Register a new user

### Doctors

-   `GET /api/doctors` - Get all doctor profiles
-   `GET /api/doctors/:id` - Get doctor profile by ID
-   `POST /api/doctors` - Create or update a doctor profile
-   `GET /api/doctors/me` - Get current doctor's profile

### Appointments

-   `POST /api/appointments` - Book an appointment
-   `GET /api/appointments/my` - Get my appointments
-   `PUT /api/appointments/:id/cancel` - Cancel an appointment
-   `PUT /api/appointments/:id/status` - Update appointment status (for doctors)

### Admin

-   `GET /api/admin/users` - Get all users
-   `GET /api/admin/doctors` - Get all doctors
-   `GET /api/admin/appointments` - Get all appointments

## 📸 Screenshots

_Coming Soon_

## 🌐 Live Demo

_Coming Soon_
