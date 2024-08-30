import {toppings} from "./data"


const top = toppings
export default function HandleCheck (props) {



const {sum,setSum,el} = props
const Handlecheck = (e,value)=>{
    setSum((prv)=>e.target.checked ? prv+= value: prv-=value)
    
}


console.log(sum)
return(
    <div>
        <input
        type="checkbox"
        name={el.name}
        // checked={e.target.checked}
        onChange={(e)=>Handlecheck(e,el.price)}
        />{el.name} {el.price} 
        
    </div>
    )
        

}
