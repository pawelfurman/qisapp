import { Request, Response } from "express";
import { Op } from "sequelize";
import ILessons from "../../../db/models/lessons";
import ILessonsQuestions from "../../../db/models/lessonsQuestions";
import ILessonsStatus from "../../../db/models/lessonsStatus";
import ILessonsStep from "../../../db/models/lessonsStep";
import IQuestion from "../../../db/models/questions";

export const getLesson = async (req:Request, res: Response) => {
    const lessonId = req.params.id;
    const userId = res.locals.userId;

    const lesson = await ILessons.findOne(
        {
            where: {id: lessonId, userId},
            include: [{
                model: ILessonsQuestions,
                as: 'questions',
                separate: true,
                attributes: ['questionId'],
                where: {
                    lessonId: lessonId,
                },
                
            }]
        },
    );

    const lessonPlain: any = lesson.get({plain: true})

    const questions = await IQuestion.findAll({
        where: {
            id: {
                [Op.in]: lessonPlain.questions.map(q => q.questionId)
            },
        },
        attributes: [
            'id',
            'firstValue',
            'firstValueUsage',
            'firstValueCollocation',
            'secondValue',
            'secondValueUsage',
            'secondValueCollocation'
        ],
        raw: true
    })

    const steps = await ILessonsStep.findAll({
        where: {
            lessonId
        },
        attributes: ['id', 'correctness', 'questionId'],
        raw: true 
    })

    return res.json({
        ...lessonPlain,
        questions,
        steps
    })
}