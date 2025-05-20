
 import React from 'react'
 
 const Count = ({count,setCount}) => {
   return (
     <div>
        <button className="bg-amber-400 p-2" onClick={()=>setCount(count+1)}>count {count}</button>
     </div>
   )
 }
 export default Count
 