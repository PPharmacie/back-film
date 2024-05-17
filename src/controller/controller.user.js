const User = require("../model/model.user");
const Token = require("../model/model.token");
const bcrypt = require("bcryptjs");
const expressAsyncHandler = require("express-async-handler");
const asyncHandler = expressAsyncHandler;
const generateToken = require("../conf/jsonwebtoken");



// Inscription d'un utilisateur

const registerUser = asyncHandler(async (req, res)=>{
    const {id, email,password, name,firstname} = req.body;
  
    if(!(id && email && password && name && firstname)){
      res.status(400).json({message:'Veuillez remplir tous les champs' });
      throw new Error('Veuillez remplir tous les champs');
    }
  
    const userExist = await User.findOne({where:{email: req.body.email}})
  
    if (userExist){
        res.status(400).json({message: 'Email déjà utilisé'})
        throw new Error('Email déjà utilisé')
    }
  
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);
  
    const user = await User.create({
        email,
        password:hashPassword,
        name,
        firstname
    })
  
    if(user){
      let token = await Token.findOne({where:{ userId: user.id }});
        if (!token) {
            token = await new Token({
                userId: user.id,
                token: generateToken(user.id),
            }).save();
        }
        res.status(201).json({
            _id: user.id,
            email:user.email,
            token: token.token
        })
    }else{
        res.status(400).json({message: "Veuillez vérifier les données entrées "});
    }
    res.status(200).json({message: 'Utilisateur enrégistré'})
  })
  
 
// // connexion d'un utilisateur
const loginUser = asyncHandler(async(req,res)=>{
    try{
      const {email,password} = req.body;
      if(!(email && password)){
          res.status(400).json({message:'Veuillez remplir tous les champs' });
          throw new Error('Veuillez remplir tous les champs');
      }else{
        const userExist = await User.findOne({where:{email:req.body.email}});
        if(userExist && (await bcrypt.compare(password, userExist.password))){
          let token = await Token.findOne({ userId: userExist.id });
          if (!token) {
              token = await new Token({
                  userId: userExist.id,
                  token: generateToken(),
              }).save();
          }
          res.status(200).json({
            id: userExist.id,
            email: userExist.email,
            token: token.token
          })
        }else{
          res.status(400).json({message: 'Veuillez vérifier les données entrées'}); 
          throw new Error("Veuillez vérifier les données entrées ");
        }
      }
  
    }catch(error){
      res.status(400).json({ error: error.message });
    }
  })

  module.exports = {
    loginUser,
    registerUser
  };