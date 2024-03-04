import { Router } from "express"
import { validateJwt } from "../middleweares/validate-jwt.js"
import { deleteA, login, update, register } from "./admin.controller.js"

const api = Router()

api.post('/register', register)
api.post('/login', login)
api.put('/update/:id', [validateJwt], update)
api.delete('/delete/id', [validateJwt], deleteA)

export default api