import { Router } from "express";
import { authenticateMiddleware } from "../auth/middleware/authenticate";
import { authorizationMiddleware } from "../auth/middleware/authorization";

import {createQuestion} from './api/create-question'
import {updateQuestion} from './api/update-question'
import {deleteQuestion} from './api/delete-question'
import {getQuestion} from './api/get-question'
import {getQuestions} from './api/get-questions'


const router = Router();

const authMiddelwares = [authenticateMiddleware, authorizationMiddleware]

router.get('/sets/:setId/questions', ...authMiddelwares, getQuestions)
router.post('/sets/:setId/questions', ...authMiddelwares, createQuestion)
router.get('/sets/:setId/questions/:id', ...authMiddelwares, getQuestion)
router.put('/sets/:setId/questions/:id', ...authMiddelwares, updateQuestion)
router.delete('/sets/:setId/questions/:id', ...authMiddelwares, deleteQuestion)

export { router }