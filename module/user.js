const mongoose=require("mongoose")

const userSchema=mongoose.Schema({
    email:{type:String,required:true},
    username:{type:String,required:true},
    password:{type:String,required:true},
    role:{type:String,enum:["user","admin"],default:"user"}
})

const user=mongoose.model("user",userSchema)

module.exports=user