import { Request, Response } from "express";
import ISet from "../../../db/models/sets";

export const createSet = async (req:Request, res: Response) => {
    const body = req.body;
    const userId = res.locals.userId;

    const done = await ISet.create({...body, userId})

    return res.json(done.get())
}