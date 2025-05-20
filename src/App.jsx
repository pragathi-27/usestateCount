import {useState} from 'react'
import Count from "./count"
import Sample from "./component/Sample"
 


function App() {
  const myName="Pragathi"
  const Age="19"
  const[count,setCount] =useState(0)
  
  return (
    <>
    <h1>
      My React App
    </h1>
    <h1 className="text-3x1 font-bold underline text-green-600">Hello world</h1>
    
    <Count count={count} setCount={setCount}/>

    </>
  )
}
export default App
