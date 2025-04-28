import express from 'express'
import { ConnectDB} from './database/db.js';
import addRouter from './routes/adduserRoutes.js'
const app=express();
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config();

const PORT=process.env.PORT ||8080

app.use(cors({
  origin: process.env.FRONTEND_URL,
  methods:["GET","POST","PUT","DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],  // extra control
  exposedHeaders: ["Authorization"],                  // optional: expose specific headers
  credentials: true,                            
}))
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/api/v1',addRouter);



app.listen(PORT,()=>{
  ConnectDB().then(()=>{
    console.log(`Db connected succefully`);
  }).catch((err)=>{
    console.log(err);
  })
  console.log(`server is running on ${PORT}`);
})