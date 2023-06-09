const router = require('express').Router();
const { json } = require('sequelize');
const { User } = require('../../../models');
const lodash = require('lodash');
const bcrypt = require("bcrypt");


// loogin a user
router.post('/login', async (req, res) => {
  try {
    // Find the user who matches the posted username
    const userData = await User.findOne({
      where: { username: req.body.username }
    });
    const validPassword = await userData.checkPassword(req.body.password);
    if (!userData || !validPassword) {
      console.log(userData, validPassword);
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    req.session.save(() => {
      req.session.user = userData.get({ plain: true });
      req.session.loggedIn = true;
      console.log('logged in');
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
    // clean up the data with lodash
    const body = lodash.pick(req.body, ['username', 'email', 'password']);
    

    // Create a new user with the hashed password
    const user = await User.create(req.body);

    req.session.save(() => {
      req.session.user = user.get({ plain: true });
      req.session.loggedIn = true;
      console.log('logged in');
      res.status(200).json(user);
    });
  } catch (error) {
    if (error.errors[0].path === 'email') {
      console.log('email validate error', error);
      res.status(400).json({ message: 'Please enter a valid email' });
      return;
    } else {
      console.log(error);
      res.status(500).json(error);
    }
  }
});

router.post('/logout', async (req, res) => {
  req.session.destroy(() => {
    res.json({ message: 'You are now logged out!' });
  });
});



router.delete('/', async (req, res) => {
  try {
    console.log('hit delete route');
    // clean up the data with lodash
    const body = lodash.pick(req.body, ['username', 'email', 'password']);
    console.log(body);
    // Create a new user with the hashed password
    const user = await User.destroy({
      where: {
        id: req.session.user.id
      }
    });
    
    req.session.destroy(() => {
      res.json({ message: 'You are now logged out!' });
    });
  } catch (error) {
    if (error.errors[0].path === 'email') {
      console.log('email validate error', error);
      res.status(400).json({ message: 'Please enter a valid email' });
      return;
    } else {
      console.log(error);
      res.status(500).json(error);
    }
  }
});




module.exports = router;
