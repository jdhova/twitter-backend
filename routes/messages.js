const express = require('express');
const router = express.Router();
const { messages } = require('../controls/messagesControl');

router.post('/messages', messages);

module.exports = router;
