const router = require('express').Router();
const { Post, User } = require('../../models');

//get all posts
router.get('/', (req, res) => {
  Post.findAll({
    attributes: ['id', 'title', 'content', 'created_at'],
    order: [['created_at', 'DESC']],
    include: [
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
  .then(dbPostData => res.json(dbPostData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  })
});

// get a single post
router.get('/:id', (req, res) => {
  Post.findOne({
    where: {
      id: req.params.id
    },
    attributes: ['id', 'title', 'content', 'created_at'],
    include: [
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
  .then(dbPostData => {
    if (!dbPostData) {
      res.status(404).json({ message: 'No post found with this id!'});
      return;
    }
    res.json(dbPostData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).res.json(err);
  })
});

// create a new post
router.post('/', (req, res) => {
  Post.create({
    title: req.body.title,
    content: req.body.content,
    user_id: req.body_user_id
  })
  .then(dbPostData => res.json(dbPostData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

// update an existing post by id
router.put('/:id', (req, res) => {
  Post.update(req.body, {
    where: {
      id: req.params.id
    }
  })
  .then(dbPostData => {
    if (!dbPostData) {
      res.status(404).json({ message: 'No post found with this id!'});
      return;
    }
    res.json(dbPostData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  })
})

// delete an existing post by id
router.delete('/:id', (req, res) => {
  Post.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(dbPostData => {
    if (!dbPostData){
      res.status(404).json({ message: 'No post found with this id!'});
      return;
    }
    res.json(dbPostData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  })
})

module.exports = router;