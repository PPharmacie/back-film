const router = require('express').Router();
const Movie = require('./controller.movie');

router.get("/",Movie.getMovies);

module.exports = router;