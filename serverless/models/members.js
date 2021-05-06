import mongoose from 'mongoose';

const memberSchema = mongoose.Schema({
  name: String,
  nickname: [String],
  description: String,
  saying: [String],
  facebook_url: String,
  instagram_url: String,
  youtube_url: String,
  icon_url: String,
  group: String
});

const members = mongoose.model('members',memberSchema,'Members');

export default members;