import IQuestion from "../../../db/models/questions"

import { Request, Response } from "express";

export const updateQuestion = async (req:Request, res: Response) => {
    const body = req.body
    const userId = res.locals.userId
    const questionId = req.params.id

    await IQuestion.update( body, {where: {id: questionId, userId}})

    const questionToReturn = await IQuestion.findOne({where: {id: questionId}})

    return res.json(questionToReturn)
}