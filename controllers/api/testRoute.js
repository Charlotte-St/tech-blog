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



module.exports = router;