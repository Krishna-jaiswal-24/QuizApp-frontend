# Language Learning App - Frontend

Welcome to the Language Learning App frontend repository! This application is designed to help users learn languages through interactive quizzes.

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Getting Started](#getting-started)
- [Folder Structure](#folder-structure)
- [Routes Structure](#routes-structure)
- [Technologies Used](#technologies-used)

## Overview
This frontend repository is built using React and is part of the Language Learning App. It provides a user interface for registering, logging in, and taking language quizzes. The app communicates with a backend server to fetch quiz data and handle user authentication.

## Features
- User authentication (Login and Register)
- Interactive language quizzes with random questions
- Quiz result display with detailed information
- Responsive and user-friendly design

## Getting Started
To run the frontend locally, follow these steps:

1. Clone this repository:

    ```bash
    git clone https://github.com/Krishna-jaiswal-24/QuizApp-frontend.git
    ```

2. Install dependencies:

    ```bash
    cd to the directory
    npm install
    ```

3. Start the development server:

    ```bash
    npm start
    ```

4. Open your browser and navigate to `http://localhost:3000`.




## Routes Structure
- `/`: Home page - displays a welcome message and a link to the login or register
- `/login`: Login page - displays a login form
- `/register`: Register page - displays a register form
- `/quiz`: Quiz page - displays a quiz with random questions
- `/home`: Quiz page - displays a quiz with random questions
- `/users/admin` : Admin page - displays a form to add questions and view the existing questions in the database and can delete them.


## Technologies Used
- React
- React Router
