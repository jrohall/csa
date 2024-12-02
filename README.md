
# Center For Societal Aspiration Web Application

This is a project created by jrohall to prototype what the Center for Societal Aspiration web application would look like if transferred to a MERN stack. Please note that this project is in its infancy and has yet to be dockerized. **You will need to add a database yourself, I recommend installing mongoDB Compass to manage the database.**


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file in csa-server directory:

```
NODE_ENV=development
# frontend url
APP_ORIGIN=http://localhost:4001
# example: mongodb://localhost:27017/{DB_NAME}
MONGO_URI=mongodb://localhost:27017/locations_db
JWT_SECRET=myjwtsecret
JWT_REFRESH_SECRET=myjwtrefreshsecret
# a verified sender email (these will stay random strings until we implement authentication...)
EMAIL_SENDER=a 
RESEND_API_KEY=a
# google maps
GMAPS_API_KEY=(i had one, but i removed it, please make your own)
```

Additionally, I made a `.env.local` for the csa-client directory:
```
NEXT_API_URL=http://localhost:4004
```
## API Reference

#### Health Check

```http
  GET /
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `none` | `null` | **Required**. none |

#### Get Google Maps API to client from .env

```http
  GET /api/get-api-key
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `none` | `null` | **Required**. You have GMAPS API key set in .env |

#### Get item

```http
  GET /api/loc
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `none`      | `null` | **Required**. None |




## Local Set Up

Start by cloning:

```bash
  git clone https://github.com/jrohall/csa.git 
```

In the main folder run:
```
    npm i
```

Create the environment variables and paste what is under the environement variables in them:

```
    cd csa-server
    npm i
    touch .env
```

```
    cd csa-web-client
    npm i (possibly will need to use --legacy-peer-deps)
    touch .env.local
```

After creating the `.env` in csa-server and the `.env.local` in the csa-client, you are ready to start the project. 

Next exit to the main 'csa' directory and install the necessary packages:
```
    cd .. (if in csa-web-client or csa-server)
    npm i
```

Next, enter the server and start it:
```
    cd csa-server
    npm run dev
```
You should see the terminal say where it is hosted

Next, enter the client and start it:
```
    cd csa-web-client
    npm run dev
```
You should see where the client is being hosted, access it using the web browser.

## Main Problems

- Pins do not always show on map for first refresh
- Company's Google Maps API needs to be added
- Mobile client has yet to be set up
- I am not using next's routing efficiently, could definitely be improved.

