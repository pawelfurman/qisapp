import { Request, Response } from "express";
import ISet from "../../../db/models/sets";

export const getSets = async (req:Request, res: Response) => {
    const sets = await ISet.findAll({
        where: {
            userId: res.locals.userId
        },
        order: [['createdAt', 'DESC']]
    })


    return res.json(sets)
}