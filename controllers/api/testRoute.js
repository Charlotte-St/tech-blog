const router = require('express').Router();
const { Post } = require('../../models');

//Route for troubleshooting
router.get('/', (req, res) => {
    Post.findAll().then((userData) => {
        res.json(userData);
    });
});


//Add a new post

router.post('/', async (req, res)=>{
    try{
        const userData = await Post.create(req.body);
        res.status(200).json(userData);
    } catch (err){
        res.status(400).json(err);
    }
});

//Delete a post

router.delete('/:id', async (req, res) => {
    try {
      const postData = await Post.destroy({
        where: {
          id: req.params.id,
          /*user_id: req.session.user_id,*/
        },
      });
  
      if (!postData) {
        res.status(404).json({ message: 'No post found with this id!' });
        return;
      }
  
      res.status(200).json(postData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  

module.exports = router;