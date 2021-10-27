const express=require("express");
const router=express.Router();
const formDat=require("../models/form");

router.route("/").post((req,res)=>{
    const nameSurname=req.body.nameSurname;
    const telephone=req.body.telephone;
    const email=req.body.email;
    const text=req.body.text;
    const newData=new formDat({
        email,
        telephone,
        nameSurname,
        text
    })
    newData.save();
})
module.exports=router;