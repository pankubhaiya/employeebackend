const express = require("express")
require("dotenv").config()
const emplRouter = express.Router()
const bcrypt = require("bcrypt")
const { emplmodel } = require("../models/employee.model")
emplRouter.use(express.json())



emplRouter.post("/AddEmployee",async(req,res)=>{
      try{
        let newemp = new emplmodel({...req.body})
         await newemp.save()
         res.send({"ok":true,"msg":"Add employee successfull"})

      }catch(err){
        res.send({"ok":false,"msg":err.message})
      }
       
})

emplRouter.get("/employees",async(req,res)=>{
    try{

       let allemp = await emplmodel.find()
       res.send({"ok":true,"msg":allemp})

    }catch(err){
      res.send({"ok":false,"msg":err.message})
    }
     
})

emplRouter.patch("/edit/:id",async(req,res)=>{
    try{
        await emplmodel.findByIdAndUpdate(req.params.id,{...req.body})
         res.send({"ok":true,"msg":"Upadete employee successfull"})
         
    }catch(err){
      res.send({"ok":false,"msg":err.message})
    }
       
})


emplRouter.delete("/delete/:id",async(req,res)=>{
    try{
        await emplmodel.findByIdAndDelete(req.params.id)
         res.send({"ok":true,"msg":"Delete employee successfull"})
         
    }catch(err){
      res.send({"ok":false,"msg":err.message})
    }
     
})

module.exports={emplRouter}