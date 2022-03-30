const { Post } = require('../models');

const postData = [
  {
    title: 'Twitter reaches 80 trillion accounts',
    content: "Everyone's impressed at the number of accounts. Some are questioning twitter's account creation authentication considering there are not that many people on the planet.",
    user_id: 1
  },
  {
    title: 'Tumblr deletes itself from the internet',
    content: "Anyone else shocked at the fact that tumblr just whipped itself from the face of the planet?",
    user_id: 2
  },
  {
    title: "'Sexy Spec' from group Pretty Ricky",
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
  }
];

const seedPosts = () => Post.bulkCreate(postData);
module.exports= seedPosts;