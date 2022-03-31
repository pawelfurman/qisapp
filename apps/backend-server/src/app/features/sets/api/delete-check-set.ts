import { Request, Response } from "express";
import IQuestion from "../../../db/models/questions";

export const deleteCheckSet = async (req:Request, res: Response) => {

    const setId = req.params.id;

    const questions = await IQuestion.findAll({where: {setId}})
    
    return res.json(!questions.length)
}