const { Post } = require('../models');

const postData = [
  {
    title: 'Twitter reaches 80 trillion accounts',
    content: "Everyone's impressed at the number of accounts. Some are questioning twitter's account creation authentication considering there are not that many people on the planet.",
    user_id: 1
  },
  {
    title: 'Tumblr deletes itself from the internet',
    content: "Anyone else shocked at the fact that tumblr just wiped itself from the face of the planet?",
    user_id: 2
  },
  {
    title: "'Spectacular' from group Pretty Ricky",
    content: "Did this guy follow anyone else on twitter? He's apparently a singer from an rnb group in the early 2000's. What a guy.",
    user_id: 3
  },
  {
    title: 'Myspace',
    content: "Twitter is so lame can we please move back to myspace? I'm ready to have music on my profile again.",
    user_id: 4
  },
  {
    title: 'Mechanical Keyboards',
    content: "Mechanical keyboards have definitely risen in popularity. Too bad that GMK's wait times are still horrendous.",
    user_id: 5
  },
  {
    title: 'Databases',
    content: 'Working with databases is more challenging than I originally anticipated, but I believe that’s exactly where all the fun lies.',
    user_id: 1
  },
  {
    title: 'I love full stack',
    content: 'Although my knowledge in any particular language may not be as deep or nuanced compared to a developer with a moree narrow focus, I truly enjoy working all over the application.',
    user_id: 4
  },
  {
    title: 'SQL vs MongoDB',
    content: 'Honestly, I prefer MongoDB. Setting up databases is so much easier, though it can get a bit messy due to the lack of structure',
    user_id: 6
  }
];

const seedPosts = () => Post.bulkCreate(postData);
module.exports= seedPosts;