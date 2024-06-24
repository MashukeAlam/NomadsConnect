
# Use Node.js 16.14.2 as the base image
FROM node:16.14.2

# Create and set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install
RUN npm i -g @sanity/cli@3.44.0

# Copy the rest of the application code
COPY . .

EXPOSE 3333

# Command to start the Sanity studio
CMD ["sanity", "start", "--host", "0.0.0.0"]
