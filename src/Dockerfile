# Use the official Node.js image as a base image
FROM node:14

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the entire project to the working directory
COPY . .

# Build the React app
RUN npm run build

# Stage 2: Use a smaller image for production
FROM nginx:alpine

# Copy the build output from the first stage to the NGINX public directory
COPY --from=0 /usr/src/app/build /usr/share/nginx/html

# Expose port 80 for NGINX
EXPOSE 80

# Command to start NGINX
CMD ["nginx", "-g", "daemon off;"]
