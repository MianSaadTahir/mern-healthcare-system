# MERN Healthcare System

A comprehensive web-based healthcare appointment booking system built with the MERN stack. This application allows patients to book appointments, doctors to manage their schedules, and administrators to oversee the system.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Prerequisites](#prerequisites)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

- **User Roles**: Separate dashboards for Patients, Doctors, and Admin.
- **Appointment Booking**: Patients can browse doctors and book appointments.
- **Doctor Management**: Doctors can manage their availability and profile.
- **Authentication**: Secure login and registration using JWT (JSON Web Tokens).
- **Responsive Design**: Mobile-friendly interface built with React.
- **Admin Dashboard**: manage users, doctors, and system settings.

## Technologies Used

**Backend:**

- Node.js, Express.js
- MongoDB (Mongoose)
- JWT for Authentication

**Frontend:**

- React (Create React App)
- Context API for State Management
- CSS Modules / Custom CSS

**Deployment:**

- Frontend: Vercel
- Backend: Render
- Database: MongoDB Atlas

## Prerequisites

- **Node.js** v14+ - [Download](https://nodejs.org/)
- **MongoDB** - [Download](https://www.mongodb.com/try/download/community) or MongoDB Atlas account.

## Usage

### 1. Clone the Repository

```bash
git clone https://github.com/MianSaadTahir/mern-healthcare-system.git
cd mern-healthcare-system
```

### 2. Install Dependencies

**Server:**

```bash
cd server
npm install
```

**Client:**

```bash
cd ../client
npm install
```

### 3. Environment Configuration

Create a `.env` file in the `server` directory:

```bash
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

### 4. Run the Project

**Development Mode (Concurrent):**

You can set up a root script to run both, or run them in separate terminals.

Terminal 1 (Server):

```bash
cd server
npm run server
```

Terminal 2 (Client):

```bash
cd client
npm start
```

- Frontend: `http://localhost:3000`
- Backend: `http://localhost:5000`

## Live Demo

- **Frontend**: [Vercel App URL](https://mern-healthcare-system-client.vercel.app/)
  _(Replace with actual Vercel URL once known)_
- **Backend API**: [Render Service URL](https://mern-healthcare-system.onrender.com)

## Contributing

Contributions, issues, and feature requests are welcome!

## License

This project is open source and available under the [MIT License](LICENSE).
