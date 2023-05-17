const router = require('express').Router();
const htmlRoutes = require('./htmlRoutes');
const apiRoutes = require('./apiRoutes');

router.use(htmlRoutes);
router.use('/api', apiRoutes)

module.exports = router;