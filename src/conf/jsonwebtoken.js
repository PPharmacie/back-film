const Jwt = require("jsonwebtoken");
const {sign} = Jwt;

const generateToken = (id) =>{
    return sign({id}, process.env.JWT_SECRET,{
        expiresIn:'1d',
    })
}

module.exports = generateToken;

