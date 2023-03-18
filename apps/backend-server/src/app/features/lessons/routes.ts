import { Router } from "express";
import { authenticateMiddleware } from "../auth/middleware/authenticate";
import { authorizationMiddleware } from "../auth/middleware/authorization";
import { createLesson } from "./api/create-lesson";
import { createLessonStatus } from "./api/create-lesson-status";
import { createLessonStep } from "./api/create-lesson-step";
import { getFarthesQuestions } from "./api/get-farthest-questions";
import { getLesson } from "./api/get-lesson";
import { getLessons } from "./api/get-lessons";

const router = Router();

const authMiddelwares = [authenticateMiddleware, authorizationMiddleware]

router.post('/lessons', ...authMiddelwares, createLesson)
router.get('/lessons', ...authMiddelwares, getLessons)
router.get('/lessons/farthest', ...authMiddelwares, getFarthesQuestions)
router.get('/lessons/:id', ...authMiddelwares, getLesson)
router.post('/lessons/:id/status', ...authMiddelwares, createLessonStatus)
router.post('/lessons/:id/step', ...authMiddelwares, createLessonStep)


export { router }