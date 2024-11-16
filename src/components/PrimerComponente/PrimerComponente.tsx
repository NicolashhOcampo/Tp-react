import { FC } from "react"

interface IPropsPrimerComponente{
    text:String;
    color:String;
    fontSize?:number;
}

export const PrimerComponente :FC<IPropsPrimerComponente> = ({text,color,fontSize}) => {
  return (
    <div style={{color:`${color}`,fontSize:`${fontSize || 1}rem`}}><p>{text}</p></div>
  )
}
