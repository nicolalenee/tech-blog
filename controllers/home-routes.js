const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models');


// render the homepage
router.get('/', (req, res) => {
  Post.findAll({
    attributes: ['id', 'title', 'content', 'created_at'],
    include: [
      {
        model: Comment,
        attributes: ['id', 'comment_content', 'user_id', 'post_id', 'created_at'],
        include: {
          model: User,
          atributes: ['username']
        }
      },
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
  .then(dbPostData => {
    const posts = dbPostData.map(post => post.get({ plain: true }))
    res.render('homepage', {posts});
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  })
});

// render the login page
router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;