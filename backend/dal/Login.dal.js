const User = require("./connection").db("users").collection("userdetails");


const ObjectID = require('mongodb').ObjectId;



//register user 
const registerUser = async({name,email,password,userRole})=>{
const result = await User.insertOne({name,email,password,userRole});
return result.ops[0];

}


//get all users

const getAllUsers = async () =>{
    const data = await User.find();
    return data.toArray();
}


//login

const Login = async ({email,password})=>{

    const user = await User.findOne({"email":email});

    if(user){
        if(user?.password !==password)
        {
            return {msg:"login faild"};

        }
        else
        {
            return {msg:"login ok" , token:user._id , userRole:user.userRole}
        }
    }
    else
    {
        return {msg:"login failed"}
    }
}


//get one user

const getOneUser = async(id)=>{
    const user = await User.findOne({_id:ObjectID(id)});
    return{data:user,msg:"get ok"}
}


module.exports = {Login,getAllUsers,registerUser,getOneUser}