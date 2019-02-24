# PhoneCatalogApp

A very simple Phone Catalog App.

## Modules

The application is composed of two modules:

### api

Simple REST API written in [Node.js](https://nodejs.org/).

See more details [here](https://github.com/inigomarquinez/PhoneCatalogApp/tree/master/api/README.md).

### front-end

React application that displays the phones returned by the API.

See more details [here](https://github.com/inigomarquinez/PhoneCatalogApp/tree/master/frontend/README.md).

## How to run the system

First, clone the repository in your local file system by running:

```
git clone https://github.com/inigomarquinez/PhoneCatalogApp.git
```

## Development mode

If you want to run the system in development mode, you have to run both modules separately.

**To run the API**, open a new terminal, go to the root folder of the repository in your local file system and execute the following commands:

```
cd api
npm install
node .
```

Port 4000 needs to be free. If the port is been used by another process, the execution will fail and exit.

**To run the front-end**, open a new terminal, go to the root folder of the repository in your local file system and execute the following commands:

```
cd frontend
npm install
npm start
```

A web browser will automatically open at http://localhost:3000. If the port 3000 is already been used, you will be asked if you want to use another port.

## Production mode

If you want to run the system in production mode (front-end served from server), open a new terminal, go to the root folder of the repository in your local file system and execute the following commands:

```
cd api
npm install
npm run production
```

Port 4000 needs to be free. If the port is been used by another process, the execution will fail and exit.

Then open a new web browser and go to http://localhost:4000.

### How to build the production mode

There is already a production version of the front-end under */api/client* folder. However, if you need to build a new version of the front-end, open a new terminal, go to the root folder of the repository in your local file system and execute the following commands:

```
cd frontend
npm install
npm run build
```

If you're running it from a Linux OS, the production build (content under */frontend/build*) will be automatically copied to */api/client* folder (thanks to a postbuild script located at */frontend/scripts/post-build.sh*). Otherwise, you'll have to manually copy the contents under */frontend/build* folder to */api/client* folder.

## Testing the system out of localhost

If you want to test the system out of localhost, for example, to see how it looks in a mobile device, follow these steps:

1. Run the system, in doesn't matter development or production mode, as explained in previous sections.
2. Find out the IP from where you're running the system (*ipconfig* in Windows OS or *ifconfig* in Linux OS).
3. Go to the device where you want to test the system, open a web browser and:
    1. If in development mode, go to http://<ip>:3000
    2. If in production mode, go to http://<ip>:4000

where <ip> is the IP found in point 2.
