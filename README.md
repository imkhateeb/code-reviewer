
# Code Reviewer Assignment

This repository contains the assignment project for CodeAnt AI. The project focuses on UI development skills, state management and API integration(Github APIs). Below is a detailed overview of the project, including its features, tech stack, setup instructions, and more.
### This project shows my
- Clean UI/UX development skills.
- Seamless state management using redux.
- API integration using `axios`.
- Critical thinking about edge cases and feedback within application.
---

## 🛠️ Tech Stack

### Frontend
- **Framework**: React.js
- **Styling**: CSS/TailwindCSS
- **Bundler**: Vite.js
- **State Management**: Redux Toolkit

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js
- **APIs**: RESTful API
- **GitHub API is used**

### Tools & Libraries
- **Version Control**: Git
- **Package Manager**: npm/yarn
- **Deployment**: Vercel, Render

---

## 📂 Project Structure
```
code-reviewer/
├── client/               # Frontend code
│   ├── public/           # Static assets
│   ├── src/              # React components and logic
│       ├── components/   # Reusable UI components.
│       ├── pages/        # Application pages.
│       ├── config/       # Client configurations.
│       ├── redux/        # Application states.
│       ├── hooks/        # Application hooks for reused logic.
│       ├── utils/        # Utility functions.
│       ├── styles/       # All css files of application.
│       ├── main.js       # Main app entry point.
│       └── App.js        # All routes started from here.
│   ├── .env              # All environment variables
│   ├── index.html        # Entry code
│   ├── package.json      # Application configuration.
│   └── tailwind.config.js# Styling configurations.
└── server/               # Backend code
    ├── controllers/      # API controllers
    ├── config/           # Backend configurations
    ├── routes/           # API routes
    ├── index.js          # Server entry point
    ├── .gitignore        # Files to ignore in Git
    ├── .env              # Backend environment variables
    ├── package.json      # Project dependencies
```
---

## ⚙️ UI Features

1. Home page: From here we can go to authentication page if not logged in or we can go to repositories page if logged in.
   ![Screenshot 2024-12-24 182159](https://github.com/user-attachments/assets/aeed2a85-c4e4-4770-a57c-95bcb89f2a20)
2. Authentication page: From here we can logged in using Github. Other authentication methods are added just for dummy purpose.
   ![Screenshot 2024-12-24 182807](https://github.com/user-attachments/assets/1fb05c91-d053-46ce-a86e-94e0a4003f7a)
3. Repositories page: Here you can see all your github repositories.
   
6. **[Feature 4]**: [Brief description]

---

## 🔧 Setup Instructions

Follow these steps to set up the project locally:

### Prerequisites
- Node.js installed (v16 or later)
- MongoDB/MySQL set up locally or on a cloud platform
- Git installed

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/imkhateeb/code-reviewer.git
   cd code-reviewer
   ```

2. Install dependencies for both frontend and backend:
   ```bash
   cd client
   npm install
   cd ../server
   npm install
   ```

3. Configure environment variables:
   - Create a `.env` file in the `server` directory.
   - Add the following variables:
     ```
     PORT=5000
     DATABASE_URL=your-database-url
     JWT_SECRET=your-secret-key
     ```

4. Start the development servers:
   - Frontend:
     ```bash
     cd client
     npm run dev
     ```
   - Backend:
     ```bash
     cd server
     npm run dev
     ```

5. Open the application:
   - Frontend: `http://localhost:3000`
   - Backend API: `http://localhost:5000/api`

---

## 📋 API Documentation

### Base URL
`http://localhost:5000/api`

### Endpoints
1. **GET /api/example**
   - Description: Fetches example data.
   - Response: `{ "data": [...] }`

2. **POST /api/example**
   - Description: Submits example data.
   - Payload: `{ "key": "value" }`
   - Response: `{ "message": "Success" }`

[Add more endpoints as necessary.]

---

## 🧪 Testing

Run tests using the following commands:

```bash
# Frontend tests
cd client
npm test

# Backend tests
cd server
npm test
```

---

## 🚀 Deployment

The project is deployed on [platform name]. Access the live version at:

[Deployment URL]
