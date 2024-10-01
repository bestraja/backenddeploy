const express=require('express')

const router=express.Router()
const productcontroller=require('../controller/controllerproduct')
const upload=require('../utils/multer')
const isAuth = require('../midelwears/IsAuth')

router.post('/',isAuth(),upload("prodact").single("file"),productcontroller.addproduct)
router.get('/',productcontroller.getproducts)
// query =>
router.get("/filterproduct",productcontroller.getproductbycategory)
router.patch('/:id',isAuth(),upload("prodact").single("file"),productcontroller.updateproduct)
router.delete('/:id',isAuth(),productcontroller.deleteproduct)

module.exports=router