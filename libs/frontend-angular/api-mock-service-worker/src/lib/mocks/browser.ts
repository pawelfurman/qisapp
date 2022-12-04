import {setupWorker} from 'msw'
import { authHandlers } from './auth'
import { db, host } from './db'
import { questionHandlers } from './questions'
import { setsHandlers } from './sets'


// TODO: It could be done in the loop
db.sets.create({id: 1, name: 'Skipper', description: 'Adjective I', userId: 3})
db.questions.create({setId: 1, userId: 3, firstValue: 'question_1-1', secondValue: 'answer_1-1'})
db.questions.create({setId: 1, userId: 3, firstValue: 'question_1-2', secondValue: 'answer_1-2'})
db.questions.create({setId: 1, userId: 3, firstValue: 'question_1-3', secondValue: 'answer_1-3'})
db.questions.create({setId: 1, userId: 3, firstValue: 'question_1-4', secondValue: "answer_1-4"})

db.sets.create({id: 2, name: 'Skipper', description: 'Adjective I', userId: 3})
db.questions.create({setId: 2, userId: 3, firstValue: 'question 2-1', secondValue: 'answer_2-1'})
db.questions.create({setId: 2, userId: 3, firstValue: 'question 2-2', secondValue: 'answer_2-2'})
db.questions.create({setId: 2, userId: 3, firstValue: 'question 2-3', secondValue: 'answer_2-3'})

db.sets.create({id: 3, name: 'English File C1', description: 'VB - work and travel', userId: 3})
db.questions.create({setId: 3, userId: 3,  firstValue: 'question_3-1', secondValue: 'answer_3-1'})

db.sets.create({id: 4, name: 'English File C1', description: 'Sounds of our life', userId: 3})
db.questions.create({setId: 4, userId: 3, firstValue: 'question_4-1', secondValue: 'answer_4-1'})
db.questions.create({setId: 4, userId: 3, firstValue: 'question_4-1', secondValue: 'answer_4-1'})
db.questions.create({setId: 4, userId: 3, firstValue: 'question_4-1', secondValue: 'answer_4-1'})
db.questions.create({setId: 4, userId: 3, firstValue: 'question_4-1', secondValue: 'answer_4-1'})
db.questions.create({setId: 4, userId: 3, firstValue: 'question_4-1', secondValue: 'answer_4-1'})
db.questions.create({setId: 4, userId: 3, firstValue: 'question_4-1', secondValue: 'answer_4-1'})


db.users.create({
    id: 3, 
    username: 'test',
    password: '098f6bcd4621d373cade4e832627b4f6'
})
// export const worker = setupWorker(...setsHandlers, ...questionHandlers)

export const worker = setupWorker(
    ...authHandlers,
    ...setsHandlers,
    ...questionHandlers,
    // ...db.sets.toHandlers('rest', host)

)
