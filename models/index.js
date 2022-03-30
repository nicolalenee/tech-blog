const User = require('./User');
const Post = require('./Post');

// associations

// a user can have many posts -> assc. thru user_id column in the post table
User.hasMany(Post, {
  foreignKey: 'user_id'
});
// a post can only belong to one user -> assc. thru user_id column in the post table
Post.belongsTo(User, {
  foreignKey: 'user_id'
})

module.exports = { User, Post };