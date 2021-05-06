const express = require('express');
const serverless = require('serverless-http');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

const membersAPI =  require('../apiControllers/members');
const videosAPI = require('../apiControllers/videos');

const app = express();
dotenv.config();
mongoose.connect(process.env.CONNECTION_URL,{useNewUrlParser: true, useUnifiedTopology:true, useFindAndModify:false})
.then(()=>console.log("Connection Successful"))
.catch( err => console.log(`Failed to Connect to the Database. ${err}`));


const router = express.Router();

router.get('/',(req,res)=>{
  res.send("This is a Bacalhau API");
});

router.get('/members',membersAPI.getMembers);
router.get('/videos',videosAPI.getVideos);

app.use(express.json({limit: '30mb', extended: true}));
app.use(express.urlencoded({limit: '30mb', extended: true}));
app.use(cors());
app.use('/.netlify/functions/app',router);

module.exports.handler = serverless(app);