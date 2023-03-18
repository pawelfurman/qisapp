import { Request, Response } from "express";
import { sequelize } from "../../../db/connection";
import ILessons from "../../../db/models/lessons";
import ILessonsQuestions from "../../../db/models/lessonsQuestions";
import ILessonsStatus from "../../../db/models/lessonsStatus";

export const createLesson = async (req:Request, res: Response) => {
    const body = req.body;
    const userId = res.locals.userId;

    console.log(body)

    try{
        const result = await sequelize.transaction(async (t) => {
            const lessonCreator = await ILessons.create({
                repetition: body.repetition,
                answerIncrement: body.answerIncrement,
                size: body.questions.length,
                userId
            }, {transaction: t})

            const lesson = lessonCreator.get();

            const statusDb = await ILessonsStatus.create({
                status: 'created',
                lessonId: lesson.id
            }, {transaction: t})

            const questions = await ILessonsQuestions.bulkCreate(
                body.questions.map((questionId) => {
                    return {
                        lessonId: lesson.id,
                        questionId
                    }
                }), {transaction: t}
            )

        

            return lesson
        })
        
        console.log(result)

        return res.json({
            id: result.id
        })
    } catch {

        return res.json({
            msg: 'error'
        })
    }


}