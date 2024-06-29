#  MERN E- Commerce Server

Welcome to the E-Commerce Backend project! This application serves as the backend infrastructure for an e-commerce platform, providing essential functionalities such as user authentication, product management, order processing, and more. Built with Node.js, Express, and MongoDB, this backend is designed to be robust, scalable, and easily extendable to meet the demands of modern e-commerce applications.

## Features

-   **User Authentication and Authorization**: Secure user registration and login with role-based access control.
-   **Product Management**: Comprehensive CRUD operations for managing product listings, including categories, pricing, stock levels, and images.
-   **Order Management**: Efficient order processing, including order creation, updating order status, and payment integration.
-   **Cart Management**: Persistent cart functionality to allow users to add, remove, and update products in their shopping cart.
-   **Admin Dashboard**: Admin-specific endpoints for managing the platform, including user management, product listings, and order tracking.
-   **RESTful API**: Clean and well-documented RESTful API endpoints for seamless integration with front-end applications.
-   **Data Validation**: Robust data validation to ensure the integrity and consistency of data throughout the application.
-   **Security**: Implementation of security best practices, including password hashing, data sanitization, and protection against common web vulnerabilities.

# Install Dependencies

**For Backend**  -  `npm i && npm run build`

## Env Variables

[](https://github.com/meabhisingh/mern-ecommerce-server-2024#env-variables)

Make Sure to Create a .env file in root directory and add appropriate variables in order to use the app.

**Essential Variables**  PORT=  `4000 or any`  MONGO_URI=  `mongodb://localhost:27017 or cloud uri`  STRIPE_KEY=`stripe secret key`  PRODUCT_PER_PAGE=`8 or any`

_fill each filed with your info respectively_


