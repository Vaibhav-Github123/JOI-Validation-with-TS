
import jwt, { JwtPayload } from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';


export interface CustomRequest extends Request {
 token: string | JwtPayload;
}


export const auth = async (req: Request, res: Response, next: NextFunction) => {
 try {
   const token = req.header('Authorization')?.replace('Bearer ', '');

   
   if (!token) {
     throw new Error();
   }


   const decoded = jwt.verify(token,`${process.env.SECRECT_KEY}`);
   (req as CustomRequest).token = decoded;


   next();
 } catch (err) {
   res.status(401).send('Please authenticate');
 }
};


// import 'dotenv/config'
// import { Request, Response, NextFunction } from "express";
// import jwt from "jsonwebtoken";
// import  {getEmail}  from '../models/User'

// export default function(req: Request, res: Response, next: NextFunction) {

//         const authorization = req.get("authorization");
//         if (!authorization) {
//           return res.status(403).json({
//             message: "A token is required for authorization",
//           });
//         }
      
//         const slpitAuthorization = authorization.split(" ");
//         const token = slpitAuthorization[1];
      
//         let decoded;
//         try {
//           decoded = jwt.verify(token, `${process.env.SECRECT_KEY}`);

//           // const email = req.body.email

//           // const user =  getEmail(email)
//           // if(!user){
//           //  const error = new Error('Not authorised!')
//           //  error.code = 401
//           //  throw error
//           // }

//           next();

//         } catch (error) {
//           return res.status(401).json({
//             message: error,
//           });
//         }

//       };
