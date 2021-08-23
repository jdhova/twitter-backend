const mongoose = require('mongoose');

const TweetSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    tweet: {
      type: String,
      max: 280,
    },
    likes: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Tweet', TweetSchema);
