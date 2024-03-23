const router = require('express').Router();

const User = require('../../models/User');


//to be removed once other other routes are working
router.get('/', (req, res) => {
    User.findAll().then((userData) => {
        res.json(userData);
    });
});

//Add a new user

router.post('/', async (req, res)=>{
    try{
        const userData = await User.create(/*{
            username: req.body.username,
            password: req.body.password
          }*/
          req.body);
          res.status(200).json(userData);
    } catch (err){
        res.status(400).json(err);
    }
})


module.exports = router;