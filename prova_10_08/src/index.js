import express from 'express'
import 'dotenv/config'
import Workshop from './routers/workshop.js'
import Vehicle from './routers/vehicle.js'
import Maintenances from './routers/maintenance.js'
const app = express()

app.use(express.json())
app.use('/workshop', Workshop)
app.use('/vehicle', Vehicle)
app.use('/maintenances', Maintenances)



app.listen(process.env.PORT, () => console.log(`Servidor rodando na porta ${process.env.PORT}`))