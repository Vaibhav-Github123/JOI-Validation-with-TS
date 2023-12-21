import bodyParser from "body-parser";
import express from 'express'
import {resolve} from 'path'
import dotenv from 'dotenv'

// Connect to MongoDB
dotenv.config({path: resolve(__dirname, '../.env')})
import '../config/database'

import router from './routers/index'

const app = express()

const hostname:string = `${process.env.host}`
const port:number = 8001
// app.set("port",process.env.PORT || 8001 )

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/",(req,res)=>{  
   res.send('API Running..')

})

app.use("/api",router)

// const port =app.get("port")
app.listen(port,hostname, () =>
 console.log(`Server started on port http://${hostname}:${port}`)
);

// export default server;