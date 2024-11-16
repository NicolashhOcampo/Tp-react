import { useEffect, useState } from "react"

export const ComponentUseEffect = () => {

    const [state,setState]=useState(false);
    useEffect(()=>{
        console.log("Montado")
        return ()=>{
            console.log("Desmontado")
        }
    },[])
    useEffect(()=>{
        console.log(state)
    },[state])
  return (
    <div>
        <p>{state? "Verdadero":"Falso"}</p>
        <button onClick={()=>{
            setState(prev=>!prev)
        }}>Cambiar State</button>
    </div>
  )
}
