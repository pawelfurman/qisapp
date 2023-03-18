import { Request, Response } from "express";
import { Op } from "sequelize";
import ILessons from "../../../db/models/lessons";
import ILessonsStatus from "../../../db/models/lessonsStatus";

export const getLessons = async (req:Request, res: Response) => {
    const lessonId = req.params.id;
    const userId = res.locals.userId;

    const lessons = await ILessons.findAll(
        {
            where: {userId},
            order: [['createdAt', 'DESC']],
            include: [{
                model: ILessonsStatus,
                as: 'status',
                separate: true,
                order: [['createdAt', 'DESC']],
                limit: 1
            }]
        },
    )



    return res.json(lessons.map(el => el.get({ plain: true })).map((l:any) => {
        return {
            ...l,
            status: l.status[0].status
        }
    }))

}