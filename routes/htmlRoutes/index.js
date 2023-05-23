const router = require('express').Router();
const { User, Review, Movie } = require('../../models');
const withAuth = require('../../utils/auth');
const _ = require('lodash');

router.get('/', async (req, res) => {
  res.redirect('/home');
});
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

//dashboard routes to the dashboard page
router.get('/dashboard', withAuth, async (req, res) => {
  try {
    console.log('hit dashboard route');
    const {
      loggedIn,
      user: { username }
    } = req.session; // pull from req.session

    // Old query to grab the users and their reviews and movies. easier to sort data if done the way below
    // const userData = await User.findAll({ 
    //   attributes: { exclude: ['password'] },
    //   order: [['username', 'ASC']],
    //   include: [
    //     {
    //       model: Review,
    //       attributes: ['id', 'rating', 'comment', 'movieId'],
    //       include: [
    //         {
    //            model: Movie, 
               
    //            attributes: ['id', 'title'] 
    //         }
    //         ]
    //     }
    //   ]
    // });

    // const users = userData.flatMap((user) => user.get({ plain: true }));
    // const reviews = users.flatMap((user) => user.reviews);
    // const movies = reviews.map((review) => review.movie);
    // _.forEach(movies, (movie) => {movie.title = _.startCase(movie.title)}); //lodash to capitalize the first letter of each word in the movie title, this is a gamechanger

    const reviewData = await Review.findAll({ //pull all reviews and include the user and movie data
      attributes: ['id', 'rating', 'comment', 'movieId', 'userId',],
      order: [['id', 'DESC']],
      include: [
        { model: User, attributes: ['username'] },
        { model: Movie, attributes: ['title'] }
      ]
    });
    reviewsRedo = reviewData.flatMap((review) => {  //make data pretty and set reviews that don't have a user to null
      const reviewObj = review.get({ plain: true });
      if (reviewObj.userId) {
        reviewObj.username = reviewObj.user.username;
        reviewObj.movieTitle = _.startCase(reviewObj.movie.title);
       return reviewObj; 
      }
      else {
        return null;
      }
      
    });
    const reviewList = _.filter(reviewsRedo, (review) => review !== null); // filter out the null reviews, these reviews were pushed in haphazardly and are missing keys data points
  
    console.log(' review pull',reviewList);
    
    // console.log(users);
    // console.log(reviews);
    // console.log(movies);
    res.render('dashboard', {
      username,
      // users,
      reviewList,
      loggedIn
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
});
//go to profile route
router.get('/profile', withAuth, async (req, res) => {  
  try {
    const {
      loggedIn,
      user: { username }
    } = req.session;

    const userData = await User.findOne({
      where: {
        username },

      attributes: { exclude: ['password'] },
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
    })
    const user = userData.get({ plain: true });
    const reviews = _.reverse(user.reviews);
    const movies = reviews.map((review) => review.movie);
    _.forEach(movies, (movie) => {movie.title = _.startCase(movie.title)});

    // console.log(user);
    console.log(reviews);
    // console.log(movies);
    res.render('profile', {
      username,
      user,
      reviews,
      movies,
      loggedIn
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
});







// look at any user's profile page This needs to be updated
// router.get('/user/:userId', async (req,res) => {
//   try {
//     const userData = await User.findByPk(req.params.userId, {
//       attributes: {
//         exclude: ['password'],
//       },
//       include: { 
//         model: Review,
//         where: {
//           userId: req.params.userId,
//         } 
//       }
//     });

//   const user = userData.get({plain: true});
//   console.log(user, 'this is you');

//   res.render('userProfile', {
//     user
//   });
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({error});
//   }
// });

module.exports = router;


