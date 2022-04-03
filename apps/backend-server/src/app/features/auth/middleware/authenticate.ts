import { NextFunction, Request, Response } from "express"
import { JwtPayload, verify } from "jsonwebtoken";
import { SECRET } from "../secret";

export const authenticateMiddleware = (req: Request, res: Response, next: NextFunction) => {

    const authentication = req.headers.authorization;
    if(!authentication){
        return res.status(403).json({
            msg: 'no token provided'
        })
    }

    const token = authentication.replace('Bearer ', '')
    let decoded: JwtPayload & {username?: string, roles?: string[]};

    try{
        decoded = verify(token, SECRET) as JwtPayload
    }catch (err){
        return res.status(405).json({
            err,
            msg: "Invalid token"
        })
    }


    res.locals.roles = decoded.roles;
    res.locals.username = decoded.username;
    res.locals.userId = decoded.id.toString();

    return next()
}