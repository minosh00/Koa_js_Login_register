import axios from 'axios';

const LoginURL ="http://localhost:3000/users/login";
const RegisterURL = "http://localhost:3000/users/register";
const GetAllUsersURL = "http://localhost:3000/users/getAllUsers";
const GetOneUserURL ="http://localhost:3000/users/"
//login

export async function loginfuntion(data){

    let alldata ={
        email: data.email,
        password: data.password
    }

    return await axios.post(LoginURL ,alldata);
}

//register

export async function Registeruser(data){

    let alldata={
        name:data?.name,
        email:data?.email,
        password:data?.password,
        userRole:data?.userRole

}
 return await axios.post(RegisterURL , alldata);


}

//get all users

export async function getAllUsers(){

    return await axios.get(GetAllUsersURL);
}


//get one user

export async function getoneuser(){
    return await axios.get(GetOneUserURL + id)
}

