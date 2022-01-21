import express from "express";
import bodyParser from "body-parser";
import userRoutes from "./routes/users.js";


const PORT = 3000;

const app = new express();
app.use(bodyParser.json());
app.use("/users", userRoutes);

app.listen(PORT,()=>{
    console.log(`Server started at ${PORT}`);
})