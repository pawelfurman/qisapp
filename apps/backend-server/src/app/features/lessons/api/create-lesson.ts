import { Request, Response } from "express";
import ILesson from "../../../db/models/lessons";

export const createLesson = async (req:Request, res: Response) => {
    const body = req.body;
    const userId = res.locals.userId;
    const setId = req.params.setId

    console.log(body, userId, setId);

    // const done = await ILesson.create({...body})

    // return res.json(done.get())

    return res.json({
        ...body
    })
}