const router = require('express').Router();
const { User, Review, Movie } = require('../../models');
const withAuth = require('../../utils/auth');


// /home routes to the home page
router.get('/home', async (req, res) => {
  try {
    res.render('home', {
      loggedIn: req.session.loggedIn
    });
  } catch (error) {
    res.status(500).json({ error });
  }
});
// /signin routes to the sign-in page
router.get('/login', async (req, res) => {
  try {
    res.render('login', {});
  } catch (error) {
    res.status(500).json({ error });
  }
});

// /signup routes to the sign-up page
router.get('/signup', async (req, res) => {
  try {
    res.render('signup', {});
  } catch (error) {
    res.status(500).json({ error });
  }
});

router.get('/dashboard', withAuth, async (req, res) => {
  try {
    console.log('hit dashboard route');
    const {
      loggedIn,
      user: { username }
    } = req.session;

    const userData = await User.findAll({
      attributes: { exclude: ['password'] },
      order: [['username', 'ASC']],
      include: [
        {
          model: Review,
          attributes: ['id', 'rating', 'comment', 'movieId'],
          include: [
            {
               model: Movie, 
               
               attributes: ['id', 'title'] 
            }
            ]
        }
      ]
    });

    const users = userData.flatMap((user) => user.get({ plain: true }));
    const reviews = users.flatMap((user) => user.reviews);
    const movies = reviews.map((review) => review.movie);

    console.log(users);
    console.log(reviews);
    console.log(movies);
    res.render('dashboard', {
      username,
      users,
      loggedIn
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
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
        } 
      }
    });

  const user = userData.get({plain: true});
  console.log(user, 'this is you');

  res.render('userProfile', {
    user
  });
  } catch (error) {
    console.log(error);
    res.status(500).json({error});
  }
});

module.exports = router;

