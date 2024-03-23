const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

User.hasMany(Post, {
  foreignKey: 'user_id',
});

User.hasMany(Comment, {
    foreignKey: 'user_id'
});

Post.hasMany(Comment, {
    foreignKey: 'post_id'
});

Post.belongsTo(User,{
    foreignKey: 'id'
});

Post.hasMany(Comment, {
    foreignKey: 'post_id'
});

Comment.belongsTo(User, {
    foreignKey: 'id'
});

Comment.belongsTo(Post, {
    foreignKey: 'id'
});

module.exports = { User, Post, Comment };
