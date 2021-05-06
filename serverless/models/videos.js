import mongoose from 'mongoose';

const videoSchema = mongoose.Schema({
  name: String,
  playlistID: String,
  description: String,
});

const videos = mongoose.model('videos',videoSchema,'Videos');

export default videos;