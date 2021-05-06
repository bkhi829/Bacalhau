import members from '../models/members.js';

export const getMembers = async (req, res) => {
  try{
    const membersJSON = await members.find();
    res.status(200).json(membersJSON);
  } catch (error) {
    res.status(404).send(error);
  }
}

