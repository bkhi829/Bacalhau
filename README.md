# Bacalhau
This project is bulit for practicing MERN Stack. It is not an offical website for the Youtube channel, 歡樂馬介休Bacalhau. If you would like to use this project for public use, please contact info@bacalhauent.com and grant their authorization before use.

## Front End
Built by [ReactJS](https://reactjs.org/). All codes and files regarding to front end is located in `client/` directory. To run the site on your local, just run `npm install` under `client/`. Create a `.env` file for environment variables. There are two environemnt variables, `REACT_APP_API_URL` and `REACT_APP_YOUTUBE_API_KEY`. You have to these variables to corresponding values before starting the project. To start hosting, run `npm start`, then the site should be live on **localhost:3000**.

### Notes
- This site is fully responsive, except the home page image, since I cannot find a good fit image for mobile.
- Images of each member are stored locally under `public/assests/`. If you want to replace those images, you have to match the filename.
- `REACT_APP_API_URL` is the url of your backend server. If you are running this project on your local, then the url should be `localhost:[PORT_OF_YOUR_SERVER]`.
- `REACT_APP_YOUTUBE_API_KEY` can be created in google developer console. Detailed Info can be found [here](https://developers.google.com/youtube/v3/getting-started)

## Back End
Built in Express.js. Data is stored at MongoDB Atlas. All codes and files is located in `server/` directory. This server provides API for front end to fetch data from the database. To run the server on your local, run `npm install` under `server/`. Create a `.env` file for environment variables. There is a mandatory environment variable, `CONNECTION_URL`, to connect to MongoDB. You can add a `PORT` variable to specify the port you want to the server host at. By default, it will be hosted at port 5000. To start the server, just run `npm start`.

### Notes
- Format for `CONNECTION_URL`: `mongodb+srv://[user]:[password]@cluster0.1234abc.mongodb.net/[CollectionName]?retryWrites=true&w=majority`. Please replace the string in brackets with corresponding values.
- You have to create a database on MongoDB Atlas in order to retrieve data from database. Link to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).

## Serverless
The files and codes under `serverless/` are pretty similar to `server/`, but I make the backend as **lambda functions** rather than a live server to respond the requests. I host the whole project on [netlify](https://www.netlify.com/), but netlify does not support hosting as a backend server. I convert the orignal backend code to netlify lambda functions, then I am able to host a *fake backend* site on netlify, and provide a way for front end to get the data from database.
