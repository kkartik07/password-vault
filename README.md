# Password Vault

## Overview

Password Vault is a secure, user-friendly web application built using the MERN stack (MongoDB, Express, React, Node.js). It allows users to store and manage their passwords efficiently in a centralized vault. The application ensures the security of user data through encryption and robust authentication mechanisms.

## Features

- **User Authentication**: Secure login and registration using JWT (JSON Web Tokens).
- **Password Management**: Users can add, view, edit, and delete their password entries.

## Technologies Used

- **Frontend**: React, CSS, HTML
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Authentication**: JWT
- **Deployment**: Vercel (Frontend), Render (Backend)

## Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/kkartik07/password-vault.git
    cd password-vault
    ```

2. **Install backend dependencies**:
    ```bash
    cd backend
    npm install
    ```

3. **Install frontend dependencies**:
    ```bash
    cd ../frontend
    npm install
    ```

4. **Set up environment variables**:
    - Create a `.env` file in the `backend` directory and add your MongoDB URL and JWT secret:
        ```plaintext
        MONGO_URL=your_mongodb_url
        SECRET=your_jwt_secret
        ```

5. **Run the application**:
    - Start the backend server:
        ```bash
        cd backend
        npm run start
        ```
    - Start the frontend development server:
        ```bash
        cd ../frontend
        npm run start
        ```

6. **Access the application**:
    - Open your browser and navigate to `http://localhost:5173`.
