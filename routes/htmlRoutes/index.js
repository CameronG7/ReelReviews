const router = require('express').Router();

// /home routes to the home page
router.get('/home', async (req, res) => {
    try {
      res.render('home', {});
    } catch (error) {
      res.status(500).json({error});
    }
  });
// /signin routes to the sign-in page
router.get('/signin', async (req, res) => {
  try {
    res.render('signin', {});
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

module.exports = router;

