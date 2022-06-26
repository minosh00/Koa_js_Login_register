import React , {useEffect,useState} from "react";
import {BrowserRouter as Router , Route , Routes} from "react-router-dom";
import Login from './components/Login'
import Register from './components/Register'
import Home from './components/Home'
import Navbar from './components/Navbar'


const  App = () =>{


    const [loggedUser, setloggedUser] = useState(null)

    useEffect(() => {
        setloggedUser(localStorage.getItem("token"));
    }, [])


return(
    <div>
        <Router>
        {loggedUser!== null ? <Navbar/> : <></>}
            <Routes>
                <Route exact path ="/" element={loggedUser !== null ? <Home/> : <Login/>}/>

                <Route  path ="/Register" element={<Register/>} />

                <Route  path ="/Home" element={<Home/>} />
                

            </Routes>
        </Router>
    </div>
)

};

export default App;