# School Notice Board Application

A full-stack MERN application for managing school notices.

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (running locally or MongoDB Atlas)
- npm or yarn

## Setup Instructions

### 1. Backend Setup (Node.js)

```bash
cd nodeapp
npm install
```

Make sure MongoDB is running locally, or update the `MONGODB_URI` in `.env` file.

Start the backend:
```bash
npm start
```

Backend will run on `http://localhost:8080`

### 2. Frontend Setup (React)

```bash
cd reactapp
npm install
```

Start the frontend:
```bash
npm start
```

Frontend will run on `http://localhost:3000`

## Features

- ✅ Add new notices
- ✅ View all notices
- ✅ Edit existing notices
- ✅ Delete notices
- ✅ Responsive design
- ✅ Modern UI with React Router

## Tech Stack

**Frontend:**
- React 18
- React Router v6
- Axios
- CSS3

**Backend:**
- Node.js
- Express.js
- MongoDB
- Mongoose

## API Endpoints

- `GET /api/notices` - Get all notices
- `GET /api/notices/:id` - Get single notice
- `POST /api/notices` - Create new notice
- `PUT /api/notices/:id` - Update notice
- `DELETE /api/notices/:id` - Delete notice

## Project Structure

```
school-notice/
├── nodeapp/          # Backend
│   ├── models/       # MongoDB models
│   ├── routes/       # API routes
│   ├── server.js     # Entry point
│   └── package.json
└── reactapp/         # Frontend
    ├── public/
    ├── src/
    │   ├── components/
    │   ├── services/
    │   └── index.js
    └── package.json
```
