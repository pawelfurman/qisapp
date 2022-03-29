import { Request, Response } from "express";
import ISet from "../../../db/models/sets";

export const deleteSet = async (req:Request, res: Response) => {
    const setId = req.params.id;

    const set = await ISet.destroy({where: {id: setId}})


    return res.json(set)
}