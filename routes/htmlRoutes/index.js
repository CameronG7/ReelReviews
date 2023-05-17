const router = require('express').Router();

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
    res.render('dashboard', {
      
    });
  } catch (error) {
    res.status(500).json({error});
  }
});

module.exports = router;

