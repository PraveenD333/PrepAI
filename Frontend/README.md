# PrepAI Application - Frontend

A modern React-based frontend application for AI-powered interview preparation, built with Vite and featuring a responsive UI.

## Tech Stack

- **Framework**: React.js
- **Build Tool**: Vite
- **Styling**: TailwindCSS
- **State Management**: React Context


## Features

- Responsive dashboard layout
- User authentication flow
- Interview session creation
- Real-time AI interaction
- Profile management
- Dynamic question generation
- Session history tracking


## Project Structure

```
Frontend/
├── public/           # Static assets
├── src/             
│   ├── assets/      # Images and media files
│   ├── Components/  # Reusable UI components
│   ├── Context/     # React context providers
│   ├── Pages/       # Application pages/routes
│   └── utils/       # Helper functions
├── .env             # Environment variables
└── vite.config.js   # Vite configuration
```


## Project Structure Key Components

### Layouts
- `DashboardLayout`: Main application layout
- `Navbar`: Navigation component

### Pages
- `LoadingPage`: Initial loading screen
- `Auth`: Login and SignUp pages
- `Dashboard`: Main user dashboard
- `InterviewPrep`: Interview preparation interface

### Components
- `Modal`: Reusable modal component
- `Drawer`: Side drawer component
- `Cards`: Various information cards
- `Inputs`: Form input components
- `Loader`: Loading state components

## Features in Detail

### Authentication
- User registration
- Login functionality
- Protected routes
- Session management

### Dashboard
- Session creation
- History tracking
- Profile management
- Quick actions

### Interview Preparation
- AI-powered question generation
- Real-time responses
- Session progress tracking
- Note-taking capability

### State Management

Uses React Context for:
- User authentication state
- Session management
- Application theme
- Modal states

### Styling

- TailwindCSS for utility-first styling
- Responsive design principles
- Custom components
- Consistent theming

## Environment Configuration

Required environment variables:
```env
VITE_API_URL=backend_api_url
```