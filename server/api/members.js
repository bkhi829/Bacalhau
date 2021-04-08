import express from 'express';

import * as membersAPI from '../apiControllers/members.js';

const router = express.Router();

router.get('/',membersAPI.getMembers);

export default router;