import {Link} from "react-router-dom" 
import Register from "./Register"
                                                                                                         
 
 const Login= ()=>{
    return(
        <div>
            <h1>This is Login Page</h1>
            <Link to="/Register">Register</Link>
        </div>
    )
}
export default Login 