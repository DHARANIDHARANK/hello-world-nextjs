FROM node:18

# Set the working directory
WORKDIR /root

# Update the package list and install yarn
RUN apt update && apt install yarn -y

# Copy package.json and yarn.lock first to leverage Docker cache
COPY package.json yarn.lock ./

# Install dependencies including Strapi
RUN yarn install

# Copy the rest of the application code
COPY . .

# Build the Strapi application
RUN yarn build

# Expose the Strapi default port
EXPOSE 1337

# Start the Strapi application
CMD ["yarn", "start"]
