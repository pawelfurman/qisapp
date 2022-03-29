import { Request, Response } from "express";
import IQuestion from "../../../db/models/questions";

export const deleteQuestion = async (req:Request, res: Response) => {
    const questionId = req.params.id 
    const userId = res.locals.userId

    const question = await IQuestion.destroy({where: {id: questionId, userId}})


    return res.json(question)
}