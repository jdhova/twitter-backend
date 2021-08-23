const express = require('express');
const router = express.Router();
const { addMessage, getMessage } = require('../controls/messagesControl');

router.post('/messages', addMessage);
router.get('/messages/:conversationId', getMessage);

module.exports = router;
