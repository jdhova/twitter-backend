const router = require('express').Router();
const Tweet = require('../models/tweetsModel');
const User = require('../models/userModel');

//create a tweet
exports.createtweet = async (req, res) => {
  const newTweet = new Tweet(req.body);
  try {
    const savedTweet = await newTweet.save();
    res.status(200).json(savedTweet);
  } catch (err) {
    res.status(500).json(err);
  }
};

// deletetweet  /delete "/:id"
exports.deletetweet = async (req, res) => {
  try {
    const tweet = await Tweet.findById(req.params.id);
    if (tweet.userId === req.body.userId) {
      await tweet.deleteOne();
      res.status(200).json('the tweet has been deleted');
    } else {
      res.status(403).json('you can delete only your tweet');
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

// update Tweet  // put request /:id",
exports.updatetweet = async (req, res) => {
  try {
    const tweet = await Tweet.findById(req.params.id);
    if (tweet.userId === req.body.userId) {
      await tweet.updateOne({ $set: req.body });
      res.status(200).json('the tweet has been updated');
    } else {
      res.status(403).json('you can update only your tweet');
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

// Like tweet  "/:id/like"
exports.liketweet = async (req, res) => {
  try {
    const tweet = await Tweet.findById(req.params.id);
    if (!tweet.likes.includes(req.body.userId)) {
      await tweet.updateOne({ $push: { likes: req.body.userId } });
      res.status(200).json('The tweet has been liked');
    } else {
      await tweet.updateOne({ $pull: { likes: req.body.userId } });
      res.status(200).json('The tweet has been disliked');
    }
  } catch (err) {
    res.status(500).json(err);
  }
};
