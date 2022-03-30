const router = require('express').Router();
const { Comment, User } = require('../../models');

// get all comments
router.get('/', (req, res) => {
  Comment.findAll({
    attributes: ['id', 'comment_content', 'created_at'],
    order: [['created_at', 'DESC']],
    include: {
      model: User,
      attributes: ['username']
    }
  })
  .then(dbCommentData => res.json(dbCommentData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  })
});

// post a new comment
router.post('/', (req, res) => {
  Comment.create({
    comment_content: req.body.comment_content,
    user_id: req.body.user_id,
    post_id: req.body.post_id
  })
    .then(dbCommentData => res.json(dbCommentData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

//delete a comment by id
router.delete('/:id', (req, res) => {
  Comment.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(dbCommentData => {
    if (!dbCommentData){
      res.status(404).json({ message: 'No comment found with that id!'});
      return;
    }
    res.json(dbCommentData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  })
});

module.exports = router;