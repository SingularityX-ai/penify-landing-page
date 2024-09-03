# Use the official Next.js image as a base
FROM node:current-alpine3.20

# Set the working directory to /app
WORKDIR /app

# Copy the package.json and yarn.lock files
COPY package.json yarn.lock ./

# Install dependencies using Yarn
RUN yarn install

# Copy the rest of the code
COPY . .

# Build the Next.js app
RUN yarn build

# Expose the port
EXPOSE 3000

# Run the command to start the development server
CMD ["yarn", "dev"]