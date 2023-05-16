const router = require('express').Router();
const bcrypt = require('bcrypt');
const {User} = require('../../../models');


router.post('/signup', async (req, res) => {
    try {
      const { username, password } = req.body;
  
      // Hash the password
      const hashedPassword = await bcrypt.hash(password, saltRounds);
  
      // Create a new user with the hashed password
      const user = await User.create({
        username,
        password: hashedPassword
      });
  
      req.session.save(() => {
        req.session.user = user.get({ plain: true });
        req.session.loggedIn = true;
        req.session.visitCount++;
        res.redirect('/users');
      });
  
    } catch (error) {
      res.status(500).json(error);
    }
  });

router.post('/logout', async (req, res) => {
    req.session.destroy(() => {
        res.json({message: 'You are now logged out!'});
    });
});

module.exports = router;