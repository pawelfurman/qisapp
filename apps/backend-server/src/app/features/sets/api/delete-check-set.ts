import { Request, Response } from "express";
import ISet from "../../../db/models/sets";

export const deleteCheckSet = async (req:Request, res: Response) => {



    return res.json(true)
}