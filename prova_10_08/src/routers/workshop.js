import express from "express"
import Workshop from "../controllers/workshop.js"
const router = express.Router()

router.get('/', Workshop.index)
router.get('/:id', Workshop.show)
router.post('/', Workshop.store)
router.put('/:id', Workshop.update)
router.delete('/:id', Workshop.destroy)

export default router