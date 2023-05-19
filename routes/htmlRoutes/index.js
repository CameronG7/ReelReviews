const router = require('express').Router();
const { User, Review,Movie } = require('../../models');

// /home routes to the home page
router.get('/home', async (req, res) => {
    try {
      res.render('home', {
        loggedIn: req.session.loggedIn
      });
    } catch (error) {
      res.status(500).json({error});
    }
  });
// /signin routes to the sign-in page
router.get('/login', async (req, res) => {
  try {
    res.render('login', {});
  } catch (error) {
    res.status(500).json({error});
  }
  });

// /signup routes to the sign-up page
router.get('/signup', async (req, res) => {
  try {
    res.render('signup', {});
  } catch (error) {
    res.status(500).json({error});
  }
});
router.get('/dashboard', async (req, res) => {
  try {
    const {loggedIn, user}  = req.session;

    const userData = await User.findAll({
      attributes: { exclude: ['password'] },
      order: [['username', 'ASC']],
      include: [{ model: Review, attributes: ['id', 'rating', 'comment'], include: { model: Movie}}]
    });

   const users = userData.map((user) => user.get({ plain: true }));
   

    console.log(req.session.user);
    res.render('dashboard', {
      users,
      loggedIn
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({error});
  }
});

module.exports = router;

