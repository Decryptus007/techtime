# Use a base image with Yarn installed
FROM node:latest

# Set the working directory
WORKDIR /app

# Copy package.json and yarn.lock files to the working directory
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install

# Copy the rest of the app files to the working directory
COPY . ./

# Build the app
RUN yarn build

# Expose the port that the app runs on
EXPOSE 5173

# Start the app using Yarn
CMD ["yarn", "dev"]
