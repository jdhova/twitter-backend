const express = require('express');
const router = express.Router();
const {
  createtweet,
  deletetweet,
  updatetweet,
  liketweet,
} = require('../controls/tweetsControl');

router.post('/createtweet', createtweet);
router.delete('/deletetweet:id', deletetweet);
router.put('/updatetweet/:id', updatetweet);
router.put('/liketweet/:id/like', liketweet);

module.exports = router;
