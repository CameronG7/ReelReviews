const router = require('express').Router();
const {User, Review, Movie} = require('../../models/index');

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
    loggedIn = req.session.loggedIn;
    res.render('dashboard', {
      loggedIn
    });
  } catch (error) {
    res.status(500).json({error});
  }
});

router.get('/user/:userId', async (req,res) => {
  try {
    const userData = await User.findByPk(req.params.userId, {
      attributes: {
        exclude: ['password'],
      },
      include: { 
        model: Review,
        where: {
          userId: req.params.userId,
        }, 
        include: {
          model: Movie, 
        }
      }
    });

    const test = userData.reviews.map((user) => {user.get({plain: true})});

  const user = userData.get({plain: true});
  console.log(test, 'this is you');

  res.render('userProfile', {
    user
  });
  } catch (error) {
    console.log(error);
    res.status(500).json({error});
  }
});

module.exports = router;

