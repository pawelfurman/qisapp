import { NextFunction, Request, Response } from "express";

export const authorizationMiddleware = (req: Request, res: Response, next: NextFunction) => {

    const roles = res.locals.roles;
    console.log('... check roles')

    next();
}