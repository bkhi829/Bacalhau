import videos from '../models/videos.js';

export const getVideos = async (req, res) => {
  try{
    const videosJSON = await videos.find();
    res.status(200).json(videosJSON);
  } catch (error) {
    res.status(404).send(error);
  }
}

