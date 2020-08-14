import express from 'express'
const router = express.Router();
import controller from '../app/controllers'

router.post('/check', controller.send)

export default router;