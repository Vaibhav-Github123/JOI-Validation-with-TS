import { Request, Response, NextFunction } from "express";
import Joi from "joi";
// import  Validator  from "./validation"

export default function Validator(Schema: Joi.Schema){


    return async(
        req:Request,
        res:Response,
        next:NextFunction
    ): Promise<void> => {
        const validationOptions = {
            abortEarly: false,
            allowUnknown: true,
            stripUnkmown: true
        };


        try {
            const value = await Schema.validateAsync(
                req.body,
                validationOptions
            );
            req.body = value,
            next();
        } catch (err:any) {
            const errors: string[] = [];
            err.details.forEach((error: Joi.ValidationErrorItem) => {
                errors.push(error.message)
            });
            res.status(400).send({errors: errors});
        }
    };
};


// export default Validator;