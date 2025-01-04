# Blog Platform with CRUD Operations

This project is a blog platform where users can perform CRUD (Create, Read, Update, Delete) operations on blog posts. It uses a React-based frontend with an Express.js backend, MongoDB for database management, and Mongoose for object data modeling.

## Features

- Create new blog posts.
- Edit existing blog posts.
- Delete blog posts.
- View all blog posts.
- View a single blog post.
- The blog platform supports full CRUD operations.

## Project Structure

- **Frontend**: React-based user interface.
- **Backend**: Express.js API with MongoDB as the database.

## Prerequisites

Before running this project, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (with npm)
- [MongoDB](https://www.mongodb.com/) (either local or MongoDB Atlas)

## Getting Started

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/SarkisSanoyan/blog-platform.git
   cd blog-platform

2. **Install Dependencies**:
   ```bash
   npm install
   ```
3. **Start the Application**: To run both the frontend and backend simultaneously, use:
   ```bash
   npm run dev
   ```

   This will start the React development server on ```http://localhost:3000``` and the Express backend server on ```http://localhost:8080```.
   Alternatively, you can run the frontend and backend separately:
   
   **Frontend**: Run ```npm start``` to start the React development server.
   
   **Backend**: Run ```npm run start:backend``` to start the Express server.

## Available Scripts

In the project directory, you can run:

```npm start```: Starts the React development server.

```npm run start:backend```: Starts the Express backend server.

```npm run dev```: Runs both the frontend and backend servers concurrently.

```npm run build```: Creates a production build of the React app.

```npm test```: Runs tests.

## Folder Structure

```plaintext
src/
├── App.js
├── index.js
client/
├── blog/
│   └── HomePage.jsx
server/
├── app.js
├── config/
│   └── db.js
├── routes/
│   └── posts.js
├── models/
    └── Post.js
├── products.json

```

## Deployment

To build the project for production:

 ```bash
npm run build
```

This will create an optimized production build in the  ```build ``` directory.

## License

This project is open-source and available under the MIT License.
