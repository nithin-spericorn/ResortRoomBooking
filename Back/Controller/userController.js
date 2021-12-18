const db = require("../models");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;
/*const env = process.env.NODE_ENV || 'local';
const c = require('../config/config.json')[env];
const fs = require("fs");*/



module.exports = {
  signUp: async (req, res) => {
      let result;
    try {
      const salt = await bcryptjs.genSalt(10);
      const hash = await bcryptjs.hash(req.body.password, salt);
      const users = {
        name: req.body.name,
        email: req.body.email,
        password: hash,
        isAdmin:req.body.isAdmin||0
      };
        
      const exist= await db.user.findOne({ where: { email: req.body.email } });
      if(!exist){
         result = await db.user.create(users);
         
      }else{
        return res.status(400).json({
            success: false,
            message: "user already registered",
          });
      }
      

      
      return res.status(200).json({
        success: true,
        message: "user registerd Successfully",
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        success: false,
        message: "something went wrong",
      });
    }
  },
  login: async (req, res) => {
    try {
      console.log("entered", req.body);
      const user = await db.user.findOne({ where: { email: req.body.email } });
      if (!user) {
        res.status(200).json({
          success: false,
          message: "No User Found",
        });
      } else {
        bcryptjs.compare(req.body.password, user.password, (err, result) => {
          if (result) {
            const token = jwt.sign(
              {
                email: user.email,
                user_id: user.id,
                isAdmin:user.isAdmin
              },
              "secret",
              {expiresIn:'3d'}
            );
            res.status(200).json({
              success: true,
              message: "authentication successfull",
              token: token,
            });
          } else {
            res.status(200).json({
              success: false,
              message: "invalid credentials",
            });
          }
        });
      }
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "something went wrong",
      });
    }
  },
  profile:async (req, res) => {
    try {
        let email=req.user.email
        const profile=await db.user.findOne({where:{email:email},attributes: { exclude: ['password'] },})
        
        const {password,...others}=profile
        res.status(200).json({
            success: true,
            message: others,
          });

    }catch(err){
        res.status(500).json({
            success: false,
            message: "something went wrong",
          });   
    }
},
AllCat:async(req,res)=>{
  try{
    let cat=await db.cat.findAll()
    res.status(200).json({
      success: true,
      message: cat,
    });

  }catch(error){
    res.status(500).json({
      success: false,
      message: "something went wrong",
    });  
  }
},
getRoom:async(req,res)=>{
  try{
    let category_name=req.query.category||"single_Room"
    console.log(category_name)
    const cat=await db.cat.findOne({where:{cat_name:category_name}})
    const result=await db.room.findAll({where:{cat_id:cat.cat_id}})
    res.status(200).json({
      success: true,
      message: result,
    });


  }catch(error){

  }
},
specificRoom:async(req,res)=>{
  try{
    const id=req.params.id
    console.log(id)
    const result=await db.room.findOne({where:{room_id:id}})
    console.log(result)
    res.status(200).json({
      success: true,
      message: result,
    });

  }catch(error){
    res.status(400).json({
      success: false,
      message: "someting wrong",
    });
  }
},
book:async(req,res)=>{
  try{
    const b={
      roomId:req.body.roomId,
      email:req.body.email
    }
     
    
    console.log(b)
    const resp=await db.book.findOne({where:{roomId:b.roomId}})
    if(!resp){
    const r=await db.book.create(b)
    
    console.log("hello")
    res.status(200).json({
      success: true,
      message: "successfully booked",
    });
  }else{
    res.status(200).json({
      success: false,
      message: "room not available",
    });
  }

  }catch(error){
    res.status(400).json({
      success: false,
      message: "someting wrong",
    });
  }
},
order:async(req,res)=>{
  try{
    let room_id=req.body.roomId;
    let price=req.body.price;
   const r= await db.order.create({room_id,price})
    console.log("enter")
    if(r)
    res.status(200).json({
      success: true,
      message: "successfully ordered",
    });
    console.log(req.body)

  }catch(error){
    res.status(400).json({
      success: false,
      message: "someting wrong",
    });
  }
},
GOr:async(req,res)=>{
  try{
    const ans=await db.order.findAll()
    res.status(200).json({
      success:true,
      message:ans
    })

  }catch(error){

  }
}
}