const Movie = require("./model.movie");

const getMovies = async (req, res) =>{
    try{
        const movies = await Movie.findAll();
        if (movies.length == 0){
            res.status(404).json({message: 'Films introuvables'});
        } 
        res.status(200).json(movies);
    }catch(error){
        if (error.name === 'SequelizeValidationError') {
            res.status(400).json({ error: error.message });
        } else {
            res.status(500).json({ error: error.message });
        }
    }
}

const getMovieById = async (req, res) =>{
    try{
        const movie = await Movie.findOne({ where:{id: req.params.id}});  
        res.status(200).json(movie);
    }catch(error){
        if (error.name === 'SequelizeValidationError') {
            res.status(400).json({ error: error.message });
        } else {
            res.status(500).json({ error: error.message });
        }
    }
}
module.exports ={getMovies, getMovieById}
