import express from 'express'
import connectDB from './database/db.js'
import userRoute from './Routes/userRoute.js'
import adminRoute from './Routes/adminRoute.js'
import showProducts from './Routes/showProducts.js'
// dotenv.config({path:'./.env'})
import cookieParser from 'cookie-parser'
import cors from 'cors'
import path from "path";
import { fileURLToPath } from "url";
const PORT=process.env.PORT || 3000

const app=express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())
const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, "public")));
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

// app.get('/',(req,res)=>{
//     res.sendFile(path.join(process.cwd(), "public", "index.html"));
// })
app.use('/api/v1/user',userRoute)
app.use('/admin',adminRoute)
app.use('/products',showProducts)
app.listen(PORT,(req,res)=>{
    console.log(`Server running at ${PORT}`)
    connectDB()
})