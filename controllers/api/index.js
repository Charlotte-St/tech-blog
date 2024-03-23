const router = require('express').Router();
const userRoutes = require('./userRoutes');
const projectRoutes = require('./postRoutes');
const commentRoutes = require('./commentRoutes');
const postRoutes = require('./postRoutes');

router.use('/users', userRoutes);
router.use('/posts', projectRoutes);
router.use('/comments', commentRoutes);
router.use('/posts', postRoutes);

module.exports = router;
