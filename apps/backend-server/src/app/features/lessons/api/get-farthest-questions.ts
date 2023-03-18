import { Request, Response } from "express";
import { Op, Sequelize } from "sequelize";
import ILessons from "../../../db/models/lessons";
import ILessonsStatus from "../../../db/models/lessonsStatus";
import ILessonsStep from "../../../db/models/lessonsStep";

export const getFarthesQuestions = async (req:Request, res: Response) => {
    const amount = req.query.amount;
    const userId = res.locals.userId;

    const fromSteps = await ILessonsStep.findAll({
        order: [['createdAt', 'ASC']],
        limit: Number(amount),
        attributes: [
            [Sequelize.fn('DISTINCT', Sequelize.col('questionId')) ,'questionId']
        ]
        
    })

    


    console.log(amount)

    return res.json(fromSteps)
}