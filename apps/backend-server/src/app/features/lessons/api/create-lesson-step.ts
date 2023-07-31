import { Request, Response } from "express";
import ILessonsStep from "../../../db/models/lessonsStep";

export const createLessonStep = async (req:Request, res: Response) => {
    const body = req.body;
    const userId = res.locals.userId;

    const result = await ILessonsStep.create({
        userAnswer: body.userAnswer,
        questionId: body.questionId,
        lessonId: body.lessonId,
        userId,
        correctness: body.correctness
    })

    console.log('result', result.get())
    return res.json({})
}