import React from "react"
import {toppings} from "./data"
import { useState } from "react"
import HandleCheck from "./Handlecheck"


function App() {
  // console.log(toppings)
  const top = toppings
  const [check,setCheck] = useState([])

  const [data,setData] = useState(toppings)
  // console.log(data)0

  const[sum,setSum] = useState(0)
  return (
    <>
      <h1>Select topping</h1>
     <label>
      {data.map((el)=>(
    <HandleCheck onChange={(e)=>setCheck((el)=>[...check,e.target.name])} el={el} setSum={setSum} sum={sum}/>
      ))}
     <p>Total :{Math.abs(sum.toFixed(2))}</p>
     </label>
    </>
  )
}

export default App
