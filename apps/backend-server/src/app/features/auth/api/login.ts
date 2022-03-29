import { Request, Response } from "express"
import * as jwt from 'jsonwebtoken'
import { SECRET } from "../secret"
import * as crypto from 'crypto'
import { getUsersByUsernameAndPassword } from "../../api/get-users"

export const login = async (req: Request, res: Response) => {
    const {username, password} = req.body;
    const hashPassword = crypto.createHash('md5').update(password).digest('hex')
    const user = await getUsersByUsernameAndPassword(username, hashPassword);

    if(!user){
        return res.status(404).json({
            msg: "User not found"
        })
    }

    const token = jwt.sign({...user, roles: ['ADMIN']}, SECRET)

    return res.json({
        ...user,
        token
    })
}
