# Use the official Next.js image as a base
FROM node:current-alpine3.20

# Set the working directory to /app
WORKDIR /app

# Enable Corepack for Yarn v4 support
RUN corepack enable

# Copy package.json, yarn.lock, and .yarnrc.yml
COPY package.json yarn.lock .yarnrc.yml ./

# Set Yarn version to stable (v4)
RUN yarn set version stable

# Install dependencies using Yarn
RUN yarn install

# Copy the rest of the code
COPY . .

# Build the Next.js app
RUN yarn build

# Expose the port
EXPOSE 3000

# Run the command to start the development server
CMD ["yarn", "start"]