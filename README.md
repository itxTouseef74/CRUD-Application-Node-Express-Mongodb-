# CRUD Application with Node.js, Express, MongoDB, Multer, Express Session, and EJS

This repository contains a CRUD (Create, Read, Update, Delete) application built using Node.js, Express, MongoDB, Multer for file uploads, Express Session for user sessions, and EJS templates for rendering views.

## Features

- Create new records with uploaded files.
- Read and display records from the MongoDB database.
- Update records with new data.
- Delete records from the database.
- User sessions for authentication and data persistence.
- EJS templates for rendering dynamic views.

## Getting Started

1. Clone this repository to your local machine:

   ```bash
   git clone [https://github.com/itxTouseef74/CRUD-Application-Node-Express-Mongodb-.git]
   ```

2. Navigate to the project directory:

   ```bash
   cd crud
   ```

3. Install the required dependencies:

   ```bash
   npm install
   ```

4. Set up your environment variables:

   - Rename `.env.example` to `.env`.
   - Configure your MongoDB connection URI, session secret, and other necessary variables in `.env`.

## Running the Application

1. Start the application:

   ```bash
   npm start
   ```

2. The server will run on `http://localhost:3000`.

## Usage

1. Open your browser and navigate to `http://localhost:3000`.
2. Explore the CRUD functionalities by creating, reading, updating, and deleting records.

## File Uploads with Multer

The application uses Multer middleware for handling file uploads. Uploaded files are stored in the `uploads` directory.

## User Sessions with Express Session

User sessions are managed using the Express Session middleware. Make sure to configure the session secret and other options in the `.env` file.

## EJS Templates

The views are rendered using EJS templates, allowing you to create dynamic and data-driven web pages.

## Dependencies Used

- Express: Web framework for building APIs and handling routes.
- Mongoose: MongoDB object modeling for interacting with the database.
- Multer: Middleware for handling file uploads.
- Express Session: Middleware for managing user sessions.
- EJS: Templating engine for rendering views.

## Contributing

Contributions are welcome! If you want to contribute to this project, follow these steps:

1. Fork this repository.
2. Create a new branch: `git checkout -b feature/your-feature`.
3. Make your changes and commit them: `git commit -m "Add your feature"`.
4. Push to the branch: `git push origin feature/your-feature`.
5. Create a pull request explaining your changes.

## Acknowledgments

- This project was developed to showcase CRUD operations using Node.js, Express, MongoDB, Multer, Express Session, and EJS templates.
