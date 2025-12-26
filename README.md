# MERN Healthcare System

A comprehensive web-based healthcare appointment booking system built with the MERN stack. This application allows patients to book appointments, and doctors to manage their schedules.

## Table of Contents

- [Features](#features)
- [Screenshots](#screenshots)
- [Live Preview](#live-preview)
- [Technologies Used](#technologies-used)
- [Prerequisites](#prerequisites)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

- **User Roles**: Separate dashboards for Patients, Doctors.
- **Appointment Booking**: Patients can browse doctors and book appointments.
- **Doctor Management**: Doctors can manage their availability and profile.
- **Authentication**: Secure login and registration using JWT.

## Screenshots

<img src="/public/assets/1.png" alt="1" width="75%">
<img src="/public/assets/2.png" alt="2" width="75%">
<img src="/public/assets/3.png" alt="3" width="75%">
<img src="/public/assets/4.png" alt="4" width="75%">

## Live Preview

Click [here](https://mern-healthcare-system-1a3c.vercel.app/) to view live demo.

## Technologies Used

**Backend:**

- Node.js, Express.js
- MongoDB
- JWT Auth

**Frontend:**

- React
- JS

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
PORT=5001
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

### 4. Run the Project

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
- Backend: `http://localhost:5001`

## Contributing

Contributions, issues, and feature requests are welcome!
Feel free to check the [issues page](https://github.com/MianSaadTahir/mern-healthcare-system/issues).

## License

This project is open source and available under the MIT [License](https://github.com/MianSaadTahir/mern-healthcare-system/blob/main/LICENSE).
