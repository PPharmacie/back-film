const router = require('express').Router();
const Movie = require('../controller/controller.movie');
const hasToken = require('../middleware.hastoken');

router.get("/",hasToken,Movie.getMovies);
router.get("/:id",hasToken, Movie.getMovieById);
router.post("/",hasToken, Movie.createMovie);
router.put("/:id",hasToken, Movie.updateMovie);
router.delete("/:id",hasToken, Movie.deleteMovie);

module.exports = router;