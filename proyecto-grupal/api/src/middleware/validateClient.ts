import {Request, Response, NextFunction} from 'express'
const jwt = require('jsonwebtoken')

module.exports = async(req: Request, res: Response, next: NextFunction) => {
  try {
    const authorization = req.get('Authorization')    
    let token = ''
  
    if (authorization && authorization.toLowerCase().startsWith('bearer')) {
      token = authorization.substring(7)
    }
    console.log(token)
    const decodedToken = await jwt.verify(token, process.env.SECRETWORD)
  
    if (!token || !decodedToken.id || decodedToken.role !== 'client') {
      return res.status(401).json({ error: 'token missing or invalid' })
    }
  
    const { id } = decodedToken
    req.user = id
    next()
  } catch (error) {
    return res.status(405).send(error);
  }
}