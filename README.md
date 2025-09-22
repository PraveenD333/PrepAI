# PrepAI Application - MERN Full-Stack(Frontend/Backend)

A full-stack application for AI-powered interview preparation featuring real-time question generation, session management, and interactive practice.

## Project Overview

The application consists of:

- **Frontend**: React.js application built with Vite
- **Backend**: Node.js/Express.js REST API
- **Database**: MongoDB
- **AI Integration**: Google Gemini AI
- **File Storage**: Cloudinary

## Tech Stack

### Frontend
- React.js
- TailwindCSS
- React Context
- Axios

### Backend
- Node.js
- Express.js
- MongoDB
- JWT Authentication
- Google Gemini AI
- Cloudinary

## Features

- User authentication and authorization
- AI-powered interview question generation
- Real-time interview sessions
- Profile management with image upload
- Session history and tracking
- Interactive practice mode
- Responsive design

## Prerequisites

- Node.js >= 18.0.0
- MongoDB (local or Atlas cloud instance)
- Google Gemini AI API key
- Cloudinary account for uploadImage
- npm or yarn package manager

## Environment Setup

### Backend (.env)
```env
PORT=8000
MONGODB_URI=your_mongodb_url
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
GEMINI_API_KEY=your_gemini_api_key
```

### Frontend (.env)
```env
VITE_API_URL=your_backend_api_url
```

## Documentation Links

For detailed component and API documentation:

- [Backend API Documentation](Backend/README.md)
  - Authentication endpoints
  - Session management
  - AI integration
  - File upload handling

- [Frontend Documentation](Frontend/README.md)
  - Component structure
  - Context providers
  - Page routing
  - Utils and helpers