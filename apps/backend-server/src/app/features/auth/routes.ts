import {Router} from 'express'
import * as jwt from 'jsonwebtoken'
import * as api from './api'



const router = Router();


router.post('/login', api.login)
router.get('/logout', api.logout)


export default router