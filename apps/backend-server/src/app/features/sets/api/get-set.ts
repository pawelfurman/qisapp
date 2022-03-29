import { Request, Response } from "express";
import ISet from "../../../db/models/sets";

export const getSet = async (req:Request, res: Response) => {
    const setId = req.params.id;

    const set = await ISet.findOne({where: {id: setId}});

    return res.json(set)
}