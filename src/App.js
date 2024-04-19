import React ,{useState /* hooks */} from 'react'
import './App.css'
const App = ()=>{

  const [count , setCount ] = useState(0)

  const [name , setName] = useState("")

  return(
    <div className='body'>
      {/* <h1> {count} </h1>

      <button onClick={ ()=> setCount(count+1) } >+</button>
      <button onClick={()=> setCount(count-1) } >-</button> */}
      <div>
        <h1> {name} </h1>

        <a href='#'><button onClick={()=>setName(" Ahmed")}>first</button></a>
        <a href='#'><button onClick={()=>setName(" Yasmen")}>second</button></a>
        <a href='#'><button onClick={()=>setName(" Mariam")}>Third</button></a>
        <a href='#'><button onClick={()=>setName(" Ammar")}>forth</button></a>
        <a href='#'><button onClick={()=>setName(" Yousef")}>fifth</button></a>
        <a href='#'><button onClick={()=>setName(" Hapepa")}>sixth</button></a>
      </div>


    </div>
  )
}
export default App