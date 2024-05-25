# Use the official Node.js image as a base
FROM node:20

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build your Vite app
RUN npm run build

# Expose the port your app runs on
EXPOSE 5173

# Start the app
CMD ["npm", "run", "preview"]
