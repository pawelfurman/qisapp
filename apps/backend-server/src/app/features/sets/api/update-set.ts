import { Request, Response } from "express";
import ISet from "../../../db/models/sets";

export const updateSet = (req:Request, res: Response) => {
    const body = req.body;
    const setId = req.params.id;

    const set = ISet.update( body, {where: {id: setId}})

    return res.json(set)
}