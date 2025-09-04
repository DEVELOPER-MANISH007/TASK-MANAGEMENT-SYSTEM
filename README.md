# Task Management System

A full-stack task management application built with React frontend and Express.js backend.

## Features

- User Authentication (Admin & Employee)
- Task Management
- Dashboard for Admin and Employees
- Responsive Design with Tailwind CSS

## Tech Stack

- **Frontend**: React, Vite, Tailwind CSS
- **Backend**: Express.js, Node.js
- **Database**: MongoDB
- **Authentication**: JWT, bcrypt

## Deployment on Render.com

### Environment Variables Required:

```
JWT_SECRET=your_super_secret_jwt_key_here
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/authestapp
NODE_ENV=production
```

### Default Admin Credentials:
- Email: `admin@me.com`
- Password: `123`

## Local Development

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Start backend server:
```bash
npm start
```

## Production Build

```bash
npm run build
npm start
```

## API Endpoints

- `GET /` - Serve React app
- `GET /api/health` - Health check
- `POST /create` - User registration
- `POST /login` - User login
- `GET /logout` - User logout
- `GET /register` - Registration page
- `GET /contact` - Contact page