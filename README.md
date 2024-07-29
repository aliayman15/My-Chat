# My-Chat
This project is a full-stack chat application built using React Native for the frontend, Express.js for the backend, and MongoDB for the database. The app supports real-time messaging, user authentication, and multiple chat rooms. It leverages WebSockets for instant communication and JWT for secure user sessions.

Features
User Authentication: Secure login and registration with JWT-based authentication.
Real-Time Messaging: Instant message delivery using WebSockets (Socket.io).
Multiple Chat Rooms: Support for creating and joining multiple chat rooms.
Message History: Persistent message storage with MongoDB.
Online Status: Real-time online/offline status of users.
Responsive UI: A mobile-first design for an optimal user experience on Android and iOS.
Architecture
Frontend (React Native)
Navigation: React Navigation for screen transitions.
State Management: Context API for managing global state.
API Services: Axios for making HTTP requests to the backend.
WebSocket Integration: Socket.io-client for real-time communication.
Backend (Express.js)
Server Framework: Express.js for handling RESTful API requests.
WebSocket Server: Socket.io for managing WebSocket connections.
Database ORM: Mongoose for interacting with MongoDB.
Authentication: JWT for secure token-based authentication.
API Endpoints: Routes for user management, message handling, and chat room management.
Database (MongoDB)
Users Collection: Stores user information including username, email, password hash, and status.
Messages Collection: Stores messages with references to the sender and chat room.
Chat Rooms Collection: Stores chat room details and member references.
