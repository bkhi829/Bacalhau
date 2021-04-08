import express from "express";
import cors from 'cors';
import mongoose from 'mongoose';

import membersRoute from './api/members.js';

const app = express();

app.use(express.json({limit: '30mb', extended: true}));
app.use(express.urlencoded({limit: '30mb', extended: true}));
app.use(cors());

app.use('/bacalhauAPI/members',membersRoute);

const CONNECTION_URL = "mongodb+srv://admin1:admin2021@cluster0.6is2h.mongodb.net/Bacalhau?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL,{useNewUrlParser: true, useUnifiedTopology:true, useFindAndModify:false})
  .then(() => app.listen(PORT, ()=>console.log(`Server listening at ${PORT}`)))
  .catch( err => console.log(`Failed to Connect. ${err}`));