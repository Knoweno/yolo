# Step 1: Build the React application
FROM node:14-slim   AS build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the application for production
RUN npm run build

# Step 2: Serve the application using a simple Node.js server
FROM node:16-alpine3.16 

# Set the working directory for the final image
WORKDIR /app

# Copy the built application from the previous stage
COPY --from=build /app/build ./build

# Install serve to serve the build files
RUN npm install -g serve

# Expose port 3000 to serve the application
EXPOSE 3000

# Command to run the application
CMD ["serve", "-s", "build", "-l", "3000"]
