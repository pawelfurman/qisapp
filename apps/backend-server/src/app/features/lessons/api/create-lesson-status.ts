import { Request, Response } from "express";
import ILessonsStatus from "../../../db/models/lessonsStatus";


export const createLessonStatus = async (req:Request, res: Response) => {
    const body = req.body;
    const userId = res.locals.userId;

    const status = await ILessonsStatus.count({
        where: {
            status: body.status,
            lessonId: body.lessonId
        }
    })

    if(!status){
        const result = await ILessonsStatus.create({
            lessonId: body.lessonId,
            status: body.status
        })

        return res.json(result.get())
    }else{
       
        return res.json({
            msg: 'Status exists'
        }) 
    }

}