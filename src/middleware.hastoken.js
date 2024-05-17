const expressAsyncHandler =  require('express-async-handler');
const Jwt = require('jsonwebtoken');
const User = require('./model/model.user');


const asyncHandler = expressAsyncHandler;

const hasToken = asyncHandler(async (req, res, next) => {
  if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
    try {
      const token = req.headers.authorization.split(' ')[1];
      const decoded = Jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decoded.id).select('-password');
      next()
    } catch (error) {
      console.log(error);
      res.status(401).json({message: 'Vous n\'êtes pas connecté(e)'});
      throw new Error('Vous n\'etes pas connecté(e)');
    }
  }
  /*if (!token) {
    res.status(401).json({message: 'Vous n\'etes pas autorisé.Pas de token!'});
    throw new Error('Vous n\'etes pas autorisé.Pas de token!');
  }*/
})

module.exports = hasToken;