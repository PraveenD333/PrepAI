# PrepAI Application - Backend

A robust Node.js backend system for AI-powered interview preparation, featuring user authentication, session management, and AI-generated interview questions.

## Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB
- **Authentication**: JWT
- **File Storage**: Cloudinary
- **AI Integration**: Google Gemini AI

## Features

- User authentication and authorization
- Interview session management
- AI-powered question generation
- File upload capabilities
- Cloudinary integration for image storage
- Session tracking and analytics

## Project Structure

```
Backend/
├── Controllers/        # Request handlers
├── Database/          # Database configuration
├── Middleware/        # Custom middleware functions
├── Models/           # MongoDB schemas
├── Routes/           # API routes
├── uploads/          # File upload directory
├── utils/           # Helper functions
├── .env             # Environment variables
├── app.js           # Express app configuration
└── server.js        # Server entry point
```

## API Endpoints

### User Routes
- `POST /api/user/register` - Register new user
- `POST /api/user/login` - User login
- `GET /api/user/profile` - Get user profile

### Session Routes
- `POST /api/sessions/create` - Create interview session
- `GET /api/sessions/my-sessions` - Get user's sessions
- `GET /api/sessions/:id` - Get specific session
- `DELETE /api/sessions/:id` - Delete session

### Question Routes
- `POST /api/questions/add` - Add question to session
- `POST /api/questions/:id/pin` - Pin/unpin question
- `POST /api/questions/:id/note` - Add note to question

### File Upload
- `POST /api/upload` - Upload profile picture

## Environment Configuration

Required environment variables:
```env
PORT=8000
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
GEMINI_API_KEY=your_gemini_api_key
```