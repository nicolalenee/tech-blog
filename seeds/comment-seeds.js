const { Comment, Post } = require('../models');

const commentData = [
  {
    comment_content: "The funny thing about the past is that it's the past. We should leave it where it's at.",
    user_id: 2,
    post_id:  4
  },
  {
    comment_content: 'LMFAO 😂',
    user_id: 2,
    post_id: 1
  },
  {
    comment_content: "I'm so dead. It's about time though, good riddance.",
    user_id: 1,
    post_id: 2
  },
  {
    comment_content: "Are you serious?",
    user_id: 4,
    post_id: 2
  },
  {
    comment_content: "I'm actually sad! I grew up on that horrible website.",
    user_id: 8,
    post_id: 2
  },
  {
    comment_content: "This is the funniest thing. Yeah, he followed me but I didn't really think much of it. I'm happy for the guy, though.",
    user_id: 2,
    post_id: 3
  },
  {
    comment_content: "The funny thing about the past is that it's the past. We should leave it where it's at. Trust me.",
    user_id: 6,
    post_id: 4
  },
  {
    comment_content: "You're lame for this one, bro. 🤣",
    user_id: 9,
    post_id: 5
  }
];

const seedComments = () => Comment.bulkCreate(commentData);
module.exports = seedComments;