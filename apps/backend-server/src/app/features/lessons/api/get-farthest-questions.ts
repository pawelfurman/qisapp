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

    const fromStepsUnique = fromSteps.map(fs => fs.get({plain: true})).reduce((acc,curr) => {
        return {...acc, [curr.questionId]: curr.createdAt}
    }, {})


    const fromQuestions = await IQuestion.findAll({
        order: [['createdAt', 'DESC']],
        attributes: ['id', 'createdAt'],
        where: {
            userId
        }
    })

    const fromQuestionsUnique = fromQuestions.map(fs => fs.get({plain: true})).reduce((acc,curr) => {
        return {...acc, [curr.id]: curr.createdAt}
    }, {})


    const combined = {...fromQuestionsUnique, ...fromStepsUnique}

    const combinedSliced = Object.keys(combined).map((questionId) => {
        return {
            questionId,
            createdAt: combined[questionId]
        }
    })
    .sort((a,b) => a.createdAt < b.createdAt ? -1 : 1)
    .slice(0, amount)
    .map(i => {
        return i.questionId
    })
    

    const questions = await IQuestion.findAll({
        where: {
            id: {
                [Op.in]: combinedSliced
            }
        }
    })

    return res.json({
        combinedSliced,
        questions
    })
}