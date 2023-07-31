import { Request, Response } from "express";
import { col, fn, Op, Sequelize } from "sequelize";
import { sequelize } from "../../../db/connection";
import ILessons from "../../../db/models/lessons";
import ILessonsStatus from "../../../db/models/lessonsStatus";
import ILessonsStep from "../../../db/models/lessonsStep";
import IQuestion from "../../../db/models/questions";

export const getFarthesQuestions = async (req:Request, res: Response) => {
    const amount = Number(req.query.amount);
    const userId = res.locals.userId;

    const fromSteps = await ILessonsStep.findAll({
        order: [['createdAt', 'DESC']],
        // limit: Number(amount),
        attributes: ['questionId', 'createdAt'],
        where: {
            userId
        }
    })

    const ids = fromSteps.map(fs => fs.get({plain: true}))
        .map(fs => fs.questionId)
        .filter((qId, idx, array) => array.indexOf(qId) === idx)
        .reverse()
        .slice(0, amount)

    const questions = await IQuestion.findAll({
        where: {
            id: {
                [Op.in]: ids
            }
        }
    })

    return res.json({
        combinedSliced: questions,
        questions
    })
}