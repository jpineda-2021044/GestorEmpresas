import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'
import { config } from 'dotenv'
import adminRoutes from '../src/admin/admin.routes.js'
import companyRoutes from '../src/company/company.routes.js'

const app = express()
config()
const port = process.env.PORT || 3200

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors())
app.use(helmet())
app.use(morgan('dev'))

app.use('/admin', adminRoutes)
app.use('/company', companyRoutes)

export const InitServer=()=>{
    app.listen(port)
    console.log(`Server HTTP is running in port ${port}`)
}