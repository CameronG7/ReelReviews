const router = require('express').Router();
const { User } = require('../../../models');

router.post('/signup', async (req, res) => {
  try {
    
    // Create a new user with the hashed password
    const user = await User.create(req.body);    
  
    req.session.save(() => {
      req.session.user = user.get({ plain: true });
      if (req.session.visitCount) {
        req.session.visitCount++;
      } else {
        req.session.visitCount = 1;
      }
      res.redirect('/dashboard');
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