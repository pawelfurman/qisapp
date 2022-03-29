import { Router } from "express";
import { authenticateMiddleware } from "../auth/middleware/authenticate";
import { authorizationMiddleware } from "../auth/middleware/authorization";

import {createSet} from './api/create-set'
import {updateSet} from './api/update-set'
import {deleteSet} from './api/delete-set'
import {getSet} from './api/get-set'
import {getSets} from './api/get-sets'
import {deleteCheckSet} from './api/delete-check-set'


const router = Router();

const authMiddelwares = [authenticateMiddleware, authorizationMiddleware]

router.get('/sets', ...authMiddelwares, getSets)
router.post('/sets', ...authMiddelwares, createSet)
router.get('/sets/:id', ...authMiddelwares, getSet)
router.put('/sets/:id', ...authMiddelwares, updateSet)
router.delete('/sets/:id', ...authMiddelwares, deleteSet)
router.get('/sets/:id/delete-check', ...authMiddelwares, deleteCheckSet)

export { router }