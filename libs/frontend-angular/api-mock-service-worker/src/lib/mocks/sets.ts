import { rest } from "msw";
import { db, host } from "./db";

export const setsHandlers = [

    rest.post<{name: string, description: string}>(`${host}/sets`, (req, res, ctx) => {

        const item = db.sets.create({
            name: req.body.name,
            description: req.body.description
        })

        return res(
            ctx.delay(500),
            ctx.status(200),
            ctx.json({
                ...item
            })
        )
    }),

    // rest.delete<never, {id: string}>(`${host}/sets/:id`, (req, res, ctx) => {

    //     db.sets.delete({
    //         where: {id: {equals: Number(req.params.id)}}
    //     })

    //     return res(
    //         ctx.delay(500),
    //         ctx.status(200)
    //     )
    // }),

    // rest.put<{title: string, description: string}, {id: string}>(`${host}/sets/:id`, (req, res, ctx) => {

    //     db.sets.update({
    //         where: {
    //             id: {equals: Number(req.params.id)}
    //         },
    //         data: req.body
    //     })

    //     return res(
    //         ctx.delay(500),
    //         ctx.status(200)
    //     )
    // }),

    // rest.get<never, {id: string}>(`${host}/sets/:id`, (req, res, ctx) => {

    //     const item = db.sets.findFirst({
    //         where: {id: {equals: Number(req.params.id)}}
    //     })

    //     return res(
    //         ctx.delay(500),
    //         ctx.status(200),
    //         ctx.json({
    //             ...item
    //         })
    //     )
    // }),


    rest.get(`${host}/sets`, (req,res,ctx) => {
        

        return res(
            ctx.status(200),
            ctx.json([
                ...db.sets.findMany({orderBy: {id: 'asc'}})
            ])
        )
    }),


    rest.get<never, {setId: string}>(`${host}/sets/:setId/delete-check`, (req,res,ctx) => {

        const questions = db.questions.findMany({
            where: {setId: {equals: Number(req.params.setId)}}
        })

 
        return res(
            ctx.status(200),
            ctx.json(!questions.length)
        )
    })

]
