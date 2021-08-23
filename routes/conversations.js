const express = require('express');
const router = express.Router();
const {
  addConvo,
  getConvo,
  getChatConvo,
} = require('../controls/conversationsControl');

router.post('/conversations', addConvo);
router.get('/conversations/userId', getConvo);
router.get('/conversations/find/:firstUserId/:secondUserId', getChatConvo);

module.exports = router;
