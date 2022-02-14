import express from 'express';
const app = express();
const port = process.env.PORT || '3000';
import routes from './routes/routes.js'
import { join } from 'path'


//static file
// app.use(express.static('public'))
// app.use(express.static(join(process.cwd(),'public')))
app.use('/static',express.static(join(process.cwd(),'public')))


//load routes
app.use('/',routes)


app.listen(port,()=>{
    console.log(`server is running on  http://localhost:${port}`)
})