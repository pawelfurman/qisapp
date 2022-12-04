import { Router } from "express";
import { authenticateMiddleware } from "../auth/middleware/authenticate";
import { authorizationMiddleware } from "../auth/middleware/authorization";
import { createLesson } from "./api/create-lesson";

const router = Router();

const authMiddelwares = [authenticateMiddleware, authorizationMiddleware]

router.post('/lessons', ...authMiddelwares, createLesson)

export { router }