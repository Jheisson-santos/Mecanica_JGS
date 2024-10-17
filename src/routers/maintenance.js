import express from "express"
import Maintenances from "../controllers/maintenance.js"
import soma from "../middlewares/soma.js"
const router = express.Router()

router.get('/', Maintenances.index)
router.get('/:id', Maintenances.show)
router.post('/', soma, Maintenances.store)
router.put('/:id', Maintenances.update)
router.delete('/:id', Maintenances.destroy)

export default router