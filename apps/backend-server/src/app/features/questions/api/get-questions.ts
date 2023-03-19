import { Request, Response } from "express";
import IQuestion from "../../../db/models/questions";

export const getQuestions = async (req:Request, res: Response) => {
    const userId = res.locals.userId;

    const questions = await IQuestion.findAll({
        where: {userId},
        order: [['createdAt', 'DESC']]
    })


    return res.json(questions)
}