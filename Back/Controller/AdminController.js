const db = require("../models");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

module.exports={
    addCat:async(req,res)=>{
        try{
            let newCat=req.body;
            const existcat=newCat.cat_name;
            const exc=await db.cat.findOne({where:{cat_name:existcat}})

            const result = await db.cat.create(newCat)
            if(!exc){
                return res.status(200).json({
                    success: true,
                    message: "category successfully created",
                  });
            }else{
                return res.status(400).json({
                    success: false,
                    message: "cannot create category",
                  });
            }

        }catch (error) {
            console.log(error);
            res.status(500).json({
              success: false,
              message: "something went wrong",
            });
          }
       
        
    },
    addRoom:async(req,res)=>{
      try{
        let {id}=req.params
       
      console.log(id)
      
       
       
        const newRoom={room_img:req.body.room_img,
                       room_title:req.body.room_title,
                       room_price:req.body.room_price,
                       cat_id :id}
                       console.log(newRoom)
        const result=await db.room.create(newRoom)
        console.log(result)
        if(result){
          return res.status(200).json({
              success: true,
              message: "Room successfully created",
            });
      }else{
          return res.status(400).json({
              success: false,
              message: "cannot create room",
            });
      }


      }catch(error){
        res.status(500).json({
          success: false,
          message: "something went wrong",
        });
      }
    }

}