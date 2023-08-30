import {Router} from 'express'
import { getEmpleados, CrearEmpleados, putEmpleados, deleteEmpleados, getEmpleado } from '../controllers/empleados.controller.js'
const router = Router()

router.get('/empleados', getEmpleados)
router.get('/empleados/:id', getEmpleado)
router.post('/empleados', CrearEmpleados)
router.patch('/empleados/:id', putEmpleados) //patch para actualizar parcialmente, put para actualizar todo
router.delete('/empleados/:id', deleteEmpleados)

export default router

