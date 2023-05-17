const router = require('express').Router();
const { json } = require('sequelize');
const {User} = require('../../../models');

// loogin a user
router.post('/login', async (req, res) => {
    try {
      // Find the user who matches the posted username
      const userData = await User.findOne({ where: { username: req.body.username } });

      if (!userData) {
        res.status(400).json({ message: 'Incorrect email or password, please try again' }); 
        return;
      }
      const validPassword = await userData.checkPassword(req.body.password);
      if (!validPassword)
      {
        res.status(400).json({message: 'Incorrect email or password, please try again'});
      }
      req.session.save(() => {
        req.session.user = userData.get({ plain: true });
        req.session.loggedIn = true;
      
        res.status(200).json(userData);
      });

    } catch (error) {
      console.log(error); 
      res.status(500).json(error);
    }
  });


router.post('/signup', async (req, res) => {
    try {
     console.log('hit signup route');
  
      // Create a new user with the hashed password
      const user = await User.create(req.body);
  
      req.session.save(() => {
        req.session.user = user.get({ plain: true });
        req.session.loggedIn = true;
      
        res.status(200).json(user);
      });
  
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post('/logout', async (req, res) => {
  req.session.destroy(() => {
    res.json({ message: 'You are now logged out!' });
  });


});

module.exports = router;