import { Request, Response } from "express";
import { col, fn, Op, Sequelize } from "sequelize";
import { sequelize } from "../../../db/connection";
import ILessons from "../../../db/models/lessons";
import ILessonsStatus from "../../../db/models/lessonsStatus";
import ILessonsStep from "../../../db/models/lessonsStep";
import IQuestion from "../../../db/models/questions";

export const getRandomQuestions = async (req:Request, res: Response) => {
    const amount = Number(req.query.amount);
    const userId = res.locals.userId;

    const questions = await IQuestion.findAll({
        order: Sequelize.literal('rand()'),
        limit: Number(amount),
        where: {
            userId
        }
    })

    return res.json({
        combinedSliced: questions,
        questions
    })
}