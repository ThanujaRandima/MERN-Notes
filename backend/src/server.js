import express from "express";
import cors from "cors"
import dotenv from "dotenv";

import notesRoutes from "./routes/notesRoutes.js"
import { connectDB } from "./config/db.js";
import rateLimiter from "./middlewear/rateLimiter.js";


dotenv.config()

const app = express();
const PORT = process.env.PORT || 5001;


//middlewear
app.use(cors({
  origin: "http://localhost:5173",
}))
app.use(express.json());
app.use(rateLimiter)

//app.use((req,res,next) => {
  //console.log(`Req method is ${req.method} & Req URL ${req.url}`);
  //next();
//})

app.use("/api/notes", notesRoutes)


connectDB().then(() => {
  app.listen(PORT, () => {
  console.log("Server started on PORT :", PORT);
})
})




//mongodb+srv://thanujaeuw:4W6QSGte68rOuH07@cluster0.bb7ugya.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0