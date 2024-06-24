# Use Node.js 16.14.2 as the base image
FROM node:16.14.2

# Create and set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build

# Command to start the application
CMD ["npm", "run", "start"]
