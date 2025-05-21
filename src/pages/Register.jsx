import { Link,useNavigate } from "react-router-dom"
import Login from "./Login"

const Register = ()=>{
     const navigate =useNavigate()
    const handileclick = ()=>{
        console.log("Handle click function called")
        navigate("/Login")

    }
    return(
        <div>
            <h1>This is Register Page</h1>
            <button onClick={handileclick}>Login</button>
        </div>
    )
}
export default Register 