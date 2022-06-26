const {Login,getAllUsers,registerUser,getOneUser} = require("../dal/Login.dal");




const CreateUser  = async (data)=>{

    const user ={
        name:data.name,
        email:data.email,
        password:data.password,
        userRole:data.userRole,
    }

    return await registerUser(user);
}



//login 

const LoginUsers = async(data)=>{

    const creatlogin={
        email:data.email,
        password:data.password
    }
    return await Login(creatlogin);
}


//get all users

const getusers = async()=>{

    return await getAllUsers();
}


//get one user
const getoneuser = async(id)=>{
    return await getOneUser(id);
}

module.exports = {CreateUser,getoneuser,getusers,LoginUsers};