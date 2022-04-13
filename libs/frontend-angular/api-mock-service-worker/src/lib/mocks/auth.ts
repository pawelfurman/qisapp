import { rest } from 'msw';
import { host } from './db';
// import { db, host } from './db';
export const authHandlers = [

    rest.post<{password: string}, never>(`${host}/login`, (req, res, ctx) => {
        // const user = db.users.findFirst({where: {username: {equals: req.body.username}}})

        if(req.body.password !== 'test'){
            return res(
                ctx.status(404),
                ctx.json({

                })
            )
        }

        return res(
            ctx.status(200),
            ctx.json({
                id: 3,
                username: "test",
                token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywidXNlcm5hbWUiOiJ0ZXN0IiwicGFzc3dvcmQiOiIwOThmNmJjZDQ2MjFkMzczY2FkZTRlODMyNjI3YjRmNiIsInJvbGVzIjpbIkFETUlOIl0sImlhdCI6MTY0OTc3NDAzM30.UTltJoS1XAbqV3hLokM3KkSJWhBJOieRTjmAcPsM2Sc"
            })
        )
    })
]