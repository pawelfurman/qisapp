import { Request, Response } from "express";
import IQuestion from "../../../db/models/questions";

export const getQuestionsByPhrase = async (req:Request, res: Response) => {
    const userId = res.locals.userId;
    const setId = req.params.phrase;

    const questions = await IQuestion.findAll({
        where: {userId, setId},
        order: [['createdAt', 'DESC']]
    })


    return res.json(questions)
}