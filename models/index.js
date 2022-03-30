const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

// associations

// a user can have many posts -> assc. thru user_id column in the post table
User.hasMany(Post, {
  foreignKey: 'user_id'
});
// a post can only belong to one user -> assc. thru user_id column in the post table
Post.belongsTo(User, {
  foreignKey: 'user_id'
});
// a comment can only belong to one user -> assc. thru user_id column in the comment table
Comment.belongsTo(User, {
  foreignKey: 'user_id'
});
// a comment can only belong to one post -> assc. thru post_id column in the comment table
Comment.belongsTo(Post, {
  foreignKey: 'post_id'
});
// a user can have many comments -> assc. thru the user_id colum in the comment table
User.hasMany(Comment, {
  foreignKey: 'user_id'
});
// a post can have many comments -> assc. thru the post_id colum in the comment table
Post.hasMany(Comment, {
  foreginKey: 'post_id'
})

module.exports = { User, Post, Comment };