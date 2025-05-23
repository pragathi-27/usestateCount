import { useEffect, useState } from "react"
import TodoList from "../component/TodoList"
import { IoIosAdd } from "react-icons/io";

const Dashboard = ()=>{
    const [data,setData]=useState("")
    const [todoList,setTodoList]=useState([])

    const handileSubmit=()=>{
        setTodoList([...todoList,data])
        console.log(todoList)
        setData("")
    }
    return(
        <div className="bg-red-100 w-300px justify-center content-center">
            <div className="justify-items-center">
                <input className="border border-black border-2 m-4 p-4 w-100" type="text" value={data} onChange={(e)=>setData(e.target.value)}/>
                <button className="bg-pink-300 rounded-2x1 p-4 text-black" onClick={handileSubmit}><IoIosAdd className="text-[15px]"/>Add</button>
            </div>
            <ol>
            {
                    todoList.length > 0 && (
                        todoList.map((item, index)=>(
                            <TodoList item= {item} index= {index}/>
                        )
                        )
                    )
            }
            </ol>
        </div>
    )
}
export default Dashboard 