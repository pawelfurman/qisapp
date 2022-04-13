import { ApiQuestion } from '@qisapp/api-contract';
import { rest } from 'msw';
import { db, host } from './db';

type CreateQuestion = Omit<ApiQuestion, 'createdAt' | 'deletedAt' | 'updatedAt' | 'setId'>

export const questionHandlers = [
    rest.get<never, {setId: string}>(`${host}/sets/:setId/questions`, (req, res, ctx) => {

        const items = db.questions.findMany({where: {setId: {equals: Number(req.params.setId)}}});


        return res(
            ctx.delay(500),
            ctx.json([
                ...items
            ])
        )
    }),

    rest.post<CreateQuestion, {setId: string}>(`${host}/sets/:setId/questions`, (req, res, ctx) => {
        
        const item = db.questions.create({
            setId: Number(req.params.setId),
            ...req.body
        })

        return res(
            ctx.delay(500),
            ctx.json(item)
        )
    }),


    rest.get<undefined, {setId: string, questionId: string}>(`${host}/sets/:setId/questions/:questionId`, (req, res, ctx) => {
        const item = db.questions.findFirst({
            where: {id: {equals: Number(req.params.questionId)}}
        })
        return res(
            ctx.delay(500),
            ctx.json(item)
        )
    }),



    rest.put<CreateQuestion, {questionId: string, setId: string}>(`${host}/sets/:setId/questions/:questionId`, (req, res, ctx) => {

        db.questions.update({
            where: {id: {equals: Number(req.params.questionId) }},
            data: {
                setId: Number(req.params.setId),
                ...req.body
            }
        })

        return res(
            ctx.delay(500),
            ctx.json([])
        )
    }),

    rest.delete<never, {questionId: string}>(`${host}/sets/:setId/questions/:questionId`, (req, res, ctx) => {
        
        db.questions.delete({
            where: {id: {equals: Number(req.params.questionId) }}
        })

        return res(
            ctx.delay(500),
            ctx.json([])
        )
    })
]
