import { Request, Response } from "express";
import IQuestion from "../../../db/models/questions";

export const createQuestion = async (req:Request, res: Response) => {
    const body = req.body;
    const userId = res.locals.userId;
    const setId = req.params.setId

    console.log(body, userId, setId);

    const done = await IQuestion.create({...body, userId, setId})

    return res.json(done.get())
}