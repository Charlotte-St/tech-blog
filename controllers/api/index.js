const router = require('express').Router();

//const userRoutes = require('./userRoutes');
const commentRoutes = require('./commentRoutes');
const postRoutes = require('./postRoutes');

const testRoutes = require('./testRoutes');

//router.use('/user', userRoutes);
router.use('/comment', commentRoutes);
router.use('/post', postRoutes);
router.use('/test', testRoutes);

module.exports = router;
