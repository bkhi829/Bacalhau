import express from 'express';

import * as videosAPI from '../apiControllers/videos.js';

const router = express.Router();

router.get('/',videosAPI.getVideos);

export default router;