# Creative Coders MM Course Exercises

This repository contains exercises from the Creative Coders MM courses. The exercises are organized into different projects, each demonstrating various concepts and techniques in web development using React, Node.js, Express, MongoDB, and other technologies.

## Table of Contents

- [Projects](#projects)
    - [React Routing](#react-routing)
    - [Recipe Exercise](#recipe-exercise)
    - [Trip MM](#trip-mm)
- [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
    - [Running the Projects](#running-the-projects)
- [Project Details](#project-details)
    - [React Routing](#react-routing-details)
    - [Recipe Exercise](#recipe-exercise-details)
    - [Trip MM](#trip-mm-details)

## Projects

### React Routing

A React project demonstrating client-side routing using React Router.

### Recipe Exercise

A full-stack MERN (MongoDB, Express, React, Node.js) application for managing recipes. This project includes user authentication, file uploads, and email notifications.

### Trip MM

A React project demonstrating data fetching and filtering.

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)
- MongoDB (for the Recipe Exercise project)

### Installation

1. Clone the repository:

     ```sh
     git clone https://github.com/your-username/creative-coders-mm-exercises.git
     cd creative-coders-mm-exercises
     ```

2. Install dependencies for each project:

     ```sh
     cd react-routing
     npm install
     cd ../Recipe_Exe/backend
     npm install
     cd ../frontend
     npm install
     cd ../../trip.mm
     npm install
     ```

### Running the Projects

#### React Routing

1. Navigate to the `react-routing` directory:

     ```sh
     cd react-routing
     ```

2. Start the development server:

     ```sh
     npm start
     ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

#### Recipe Exercise

1. Start the backend server:

     ```sh
     cd Recipe_Exe/backend
     npm run dev
     ```

2. Start the frontend development server:

     ```sh
     cd ../frontend
     npm run dev
     ```

3. Open [http://localhost:5173](http://localhost:5173) in your browser.

#### Trip MM

1. Navigate to the `trip.mm` directory:

     ```sh
     cd trip.mm
     ```

2. Start the development server:

     ```sh
     npm start
     ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Details

### React Routing Details

- **Description**: A React project demonstrating client-side routing using React Router.
- **Technologies**: React, React Router
- **Key Features**:
    - Navigation using `NavLink`
    - Dynamic routing with `useParams`
    - Fetching data with custom hooks

### Recipe Exercise Details

- **Description**: A full-stack MERN application for managing recipes.
- **Technologies**: MongoDB, Express, React, Node.js, Tailwind CSS, Nodemailer, Bull
- **Key Features**:
    - User authentication with JWT
    - Recipe management (CRUD operations)
    - File uploads with Multer
    - Email notifications with Nodemailer and Bull
    - Pagination

### Trip MM Details

- **Description**: A React project demonstrating data fetching and filtering.
- **Technologies**: React, JSON Server
- **Key Features**:
    - Data fetching with custom hooks
    - Filtering data based on user input