const Movie = require("../model/model.movie");

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

const createMovie = async(req, res)=>{
    try{
        const newMovie = await Movie.create(req.body);
        res.status(200).json(newMovie);
    }catch(error){
        if (error.name === 'SequelizeValidationError') {
            res.status(400).json({ error: error.message });
        } else {
            res.status(500).json({ error: error.message });
        }
    }
}

const updateMovie = async (req, res) =>{
    try{
        const movie = await Movie.update(req.body,{where: {id:req.params.id}});
        res.status(200).json({message:`Le film a été modifié! `});
    }catch(error){
        if (error.name === 'SequelizeValidationError') {
            res.status(400).json({ error: error.message });
        } else {
            res.status(500).json({ error: error.message });
        }
    }
}

const deleteMovie = async(req, res) =>{
    try{
        const movie = await Movie.destroy({where: {id:req.params.id}});
        res.status(200).json({message:`Le film a été supprimé! `});
    }catch (error){
        if (error.name === 'SequelizeValidationError') {
            res.status(400).json({ error: error.message });
        } else {
            res.status(500).json({ error: error.message });
        }
    }
}
module.exports ={getMovies, getMovieById, createMovie,updateMovie,deleteMovie }
