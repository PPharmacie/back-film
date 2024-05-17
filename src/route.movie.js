const router = require('express').Router();
const Movie = require('./controller.movie');

router.get("/",Movie.getMovies);
router.get("/:id",Movie.getMovies);
router.post("/",Movie.createMovie);
router.put("/:id",Movie.updateMovie);
router.delete("/:id",Movie.deleteMovie);

module.exports = router;