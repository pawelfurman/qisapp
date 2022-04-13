import { rest } from 'msw'

export const handlers = [
    // Handles a POST /login request
    rest.post('/login', (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json({
                "id": 1,
                "username": "admin",
                "password": "21232f297a57a5a743894a0e4a801fc3",
                "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJhZG1pbiIsInBhc3N3b3JkIjoiMjEyMzJmMjk3YTU3YTVhNzQzODk0YTBlNGE4MDFmYzMiLCJyb2xlcyI6WyJBRE1JTiJdLCJpYXQiOjE2NDkwOTMwNTd9.CjWT8UTVtqtGE9P-EA-czr35T1eQ5XlGQ-B3jNk4w74"
            })
        )
    }),
    // Handles a GET /user request
    rest.get('/user', (req,res,ctx) => {
        return res(
            ctx.status(200),
            ctx.json({
                test: 1
            })
        )
    }),
  ]