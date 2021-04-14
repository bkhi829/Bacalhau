import express from "express";
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import membersRoute from './api/members.js';
import videosRoute from './api/videos.js';

const app = express();
dotenv.config();

app.use(express.json({limit: '30mb', extended: true}));
app.use(express.urlencoded({limit: '30mb', extended: true}));
app.use(cors());

app.use('/bacalhauAPI/members',membersRoute);
app.use('/bacalhauAPI/videos',videosRoute);

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL,{useNewUrlParser: true, useUnifiedTopology:true, useFindAndModify:false})
  .then(() => app.listen(PORT, ()=>console.log(`Server listening at ${PORT}`)))
  .catch( err => console.log(`Failed to Connect. ${err}`));