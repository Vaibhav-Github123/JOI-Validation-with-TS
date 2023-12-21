import express from 'express'
import jwt from 'jsonwebtoken'
import bcrypt from "bcrypt"
import { getEmail, createUser} from '../models/User'

export const login = async (req:express.Request, res:express.Response)=>{
    try {
        const { email, password} = req.body
        if(!email || !password){
            return res.sendStatus(400)
        }

        const user = await getEmail(email).select("+password")
        if(!user){
            return res.send('Invalid Email Or password')
        }
        
        const isvalid = bcrypt.compareSync(password, user.password)
        if(!isvalid){
          return res.send('Invalid Email Or password')
        }

        const token = await jwt.sign({ email },`${ process.env.SECRECT_KEY}`)
        
        return res.status(200).json({
          success: true,
          message: 'User registertion successfully...',
          data: user,
          token
        }).end()
    } catch (error) {
        console.log(error)
        return res.sendStatus(400)
    }
}

export const register = async (req: express.Request, res: express.Response) => {
    try {
        const {username, email, password, phone } = req.body;
    
        if ( !username || !email || !password || !phone ) {
          return res.sendStatus(400);
        }
    
        const existingUser = await getEmail(email);
      
        if (existingUser) {
          return res.sendStatus(400);
        }
        const hashpass = await bcrypt.hash(password, 10)
    
        const user = await createUser({
          username,
          email,
          password: hashpass,
          phone

        });

        return res.status(200).json(user).end();
      } catch (error) {
        console.log(error);
        return res.sendStatus(400);
      }
    }