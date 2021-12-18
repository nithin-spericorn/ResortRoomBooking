const express = require('express')
const router = express.Router();
const userController = require("../Controller/userController");
const AdminController =require("../Controller/AdminController")
const { verifyToken ,verifyAdmin} = require('../middleware/veryfyToken');



router.post('/sign-up', userController.signUp);

router.post('/login', userController.login)

router.get('/profile', verifyToken, userController.profile)

router.post('/addcat',verifyToken,verifyAdmin,AdminController.addCat)

router.get("/AllCat",userController.AllCat)

router.post("/addroom/:id",verifyToken,verifyAdmin,AdminController.addRoom)

router.get("/rooms",userController.getRoom)

router.get("/:id",userController.specificRoom)

router.post("/book",userController.book)

router.post("/order",userController.order)

router.get("/myorder/order",userController.GOr)


module.exports = router;