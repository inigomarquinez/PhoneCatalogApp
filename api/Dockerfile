# Base docker image
FROM node

# Set working directory in image OS
WORKDIR /usr/src/phone-catalog-app

# Install appliation dependencies in docker image
COPY package.json .
RUN npm install

# Copy the rest of the application (taking into account .dockerignore file)
COPY . .

# How to run the application
CMD ["npm", "run", "production"]
