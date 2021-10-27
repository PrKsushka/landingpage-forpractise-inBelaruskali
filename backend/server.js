const connectDB=require('./config/db');
require("dotenv").config();
const express=require("express");
const formRouter=require("./routes/formRouter");
const cors = require("cors");
const path=require("path");
connectDB();

const app=express();
app.use(express.json());
app.use("/api/form",formRouter);

if(process.env.NODE_ENV==='production'){
    app.use(express.static('client/build'));

    app.get('*',(req,res)=>{
        res.sendFile(path.resolve(__dirname,'client', 'build', 'index.html'))
    })
}

const PORT=process.env.PORT ||5000;

app.listen(PORT,()=>console.log(`Server is running on port ${PORT}`));