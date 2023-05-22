const router = require('express').Router();
const { Movie, MovieTag } = require('../../../models');

router.get('/', async (req, res) => {
    try {
        const movieData = await Movie.findAll();
        res.status(200).json(movieData);
    } catch (error) {
        res.status(500).json(error);
    }
});

router.post('/' , async (req, res) => {
  try {
      const movieData = await Movie.create(req.body);//create a new movie
      if(req.body.tagIds.length) { // if there's movie tags, we need to create pairings to bulk create in the movieTag model    
            
            const movieTagIdArr = JSON.parse(req.body.tagIds).map((tagId) => {
                return {
                    movieId: movieData.id,
                    tagId,
                };
            });
            const movieTagIds = await MovieTag.bulkCreate(movieTagIdArr);
            res.status(200).json({movieTagIds, movieData});
        }    
      res.status(200).json(movieData);
  } catch (error) {
    console.log(error);
      res.status(500).json(error);
  }
});


module.exports = router;