# Overview
This project involved the containerization and deployment of a full-stack yolo application using Docker. The project use React for front-end and NodeJs Express framework for backend, MongoDb for database.


# Requirements
Install the docker engine here:
- [Docker](https://docs.docker.com/engine/install/) 

   # For Ubuntu Users -run these commands
    - sudo apt update && sudo apt install -y 
    - apt-transport-https ca-certificates curl software-properties-common && curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add - && sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" && sudo apt update && sudo apt install -y docker-ce

        # OR 
        - sudo apt update && sudo apt install -y 
        - sudo apt install docker

## How to launch the application 
  # 1. Lauching without docker
    - Pull the code and run npm install to install dependancies
    -Navigate to client folder [cd client] and run npm start to launch front-end application
    -Navigate to backend folder [cd backend] and run npm start to laucnh back-end application
  # 2. Launch with docker by building the docker image
  - Pull the code
   -Run docker-compose up --build
   


![Alt text](image.png)

## Project Structure
yolo/
├── backend/
│   ├── models/
│   │   └── Products.js                   # Schema and model definition for products in MongoDB
│   │
│   ├── routes/
│   │   └── productRoute.js               # Handles product-related API routes
│   │
│   ├── config.js                         # MongoDB URL and other configurations
│   ├── server.js                         # Express server entry point
│   ├── upload.js                         # Handles product images uploads
│   ├── package.json                      # Backend dependencies
│   ├── package-lock.json                 # Backend lock file for dependencies
│   ├── Dockerfile                        # Dockerfile for the backend server
│   └── .dockerignore                     # Ignore unnecessary files for backend Docker build
│
├── client/
│   ├── public/
│   │   ├── favicon.ico                   # Favicon for the web app
│   │   ├── index.html                    # Main HTML file for the React app
│   │   ├── manifest.json                 # PWA manifest file
│   │   ├── robots.txt                    # Instructions for web crawlers
│   │   └── logo192.png                   # Site logos for various resolutions
│   │   └── logo512.png                   # Site logos for various resolutions
│   │
│   ├── src/
│   │   ├── api/
│   │   │   └── apiConfig.js              # Stores the base API URL (BASE_API_URL)
│   │   │
│   │   ├── components/
│   │   │   ├── AboutUs.js                # About us page component
│   │   │   ├── AddProduct.js             # Add product component
│   │   │   ├── App.js                    # Main app component
│   │   │   ├── EditProductForm.js        # Form for editing a product
│   │   │   ├── Footer.js                 # Footer component
│   │   │   ├── Header.js                 # Header component
│   │   │   ├── Navbar.js                 # Navbar component
│   │   │   ├── NewProduct.js             # Component for creating new products
│   │   │   ├── Product.js                # Single product component
│   │   │   ├── ProductControl.js         # Main component for managing product operations
│   │   │   ├── ProductDetail.js          # Detailed view for a product
│   │   │   ├── ProductList.js            # Displays a list of products
│   │   │   └── ReusableForm.js           # Reusable form component for adding/editing products
│   │   │
│   │   ├── images/                       # Folder to store site images
│   │   │   └── ....
│   │   │
│   │   ├── App.css                       # Main CSS file for the app styling
│   │   ├── App.test.js                   # Test file for the App component
│   │   ├── index.js                      # Entry point for React app
│   │   ├── Product-details.css           # CSS for product details page
│   │   ├── serviceWorker.js              # Service worker for PWA support
│   │   └── setupTests.js                 # Test setup file
│   │
│   ├── package.json                      # Client dependencies
│   ├── package-lock.json                 # Client lock file for dependencies
│   ├── Dockerfile                        # Dockerfile for the React client
│   └── .dockerignore                     # Ignore unnecessary files for client Docker build
│
├── docker-compose.yaml                   # Docker Compose configuration file (YAML format)
├── docker-compose.yml                    # Docker Compose configuration file (YML format)
├── README.md                             # Project documentation
└── .gitignore                            # Files to ignore in version control


