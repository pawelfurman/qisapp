import { Request, Response } from "express";
import IQuestion from "../../../db/models/questions";

export const getQuestion = async (req:Request, res: Response) => {
    const questionId = req.params.id;
    const userId = res.locals.userId;
    const setId = req.params.setId

    const question = await IQuestion.findOne({where: {id: questionId, setId, userId}});

    return res.json(question)
}