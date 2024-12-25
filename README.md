
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
   ![Screenshot 2024-12-24 182937](https://github.com/user-attachments/assets/8845af1f-7ec1-4337-af3b-83504a525110)
4. Profile page: Here user can see there github profile.
   ![Screenshot 2024-12-24 184147](https://github.com/user-attachments/assets/be753743-be12-4252-baa1-fdb9a2a6247f)
---

## 📋 API Documentation

### Base URL
`http://localhost:3333`

### Endpoints
1. **GET /users/token**
   - Description: Get github token to make resource requests.

2. **GET /users/repository**
   - Description: Fetches user's github repository.

3. **GET /users**
   - Description: Fetches user's github profile data.

---

## 🚀 Deployment

Frontend is deployed on Vercel. Access the live version at:
[Deployment URL]

Backend is deployed on render.
