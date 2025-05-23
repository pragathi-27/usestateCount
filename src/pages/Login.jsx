// import {Link} from "react-router-dom" 
// import Register from "./Register"
                                                                                                         
 
//  const Login= ()=>{
//     return(
//         <div>
//             <h1>This is Login Page</h1>
//             <Link to="/Register">Register</Link>
//         </div>
//     )
// }
// export default Login 

import { useState }from 'react'
import Input from 'costuminputg'
import{ Link } from "react-router-dom"


 const Login = () => {
    const[email,setEmail] = useState("")
    const [Password, setPassword] =useState("")
    const handileSubmit =() =>{
        email.prevengtDefault()
        console.logt(email)
        console.log(Password)
        setEmail("")
        setPassword("")

        
    }
  return (
    <center>
    <div className="items-center justify-center w-150 h-full mt-50 bg-gray-100">
        <form onSubmit={handileSubmit}>
            <Input
            type="email"
            label="Email address"
            placeholder="Enter your Email"
            className ='w-[80%] h-10 border-gray-300 rounded-md px-4'
            value= {email}
            onChange={(e) => setEmail(e.target.value)}
            />
            <Input
            type="password"
            label="password"
            placeholder="Enter your password"
            ClassName ='w-[80%] h-10 border-gray-300 rounded-md px-4'
            value= {Password}
            onChange={(e) => setPassword(e.target.value)}
            />
            <button className='bg-blue-600 w-full mt-4' type='submit'>Login</button>
            </form>
            <p>New user?<Link to="/Register">Register</Link></p>

    </div>
    </center>
  )
}

export default Login
