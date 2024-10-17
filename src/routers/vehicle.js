import express from "express"
import Vehicle from "../controllers/vehicle.js"
const router = express.Router()

router.get('/', Vehicle.index)
router.get('/:id', Vehicle.show)
router.post('/', Vehicle.store)
router.put('/:id', Vehicle.update)
router.put('/maintenance/:id', Vehicle.maintenance)
router.delete('/:id', Vehicle.destroy)

export default router