
import { ComponentCounter } from "./components/ComponentCounter/ComponentCounter"
import { PrimerComponente } from "./components/PrimerComponente/PrimerComponente"
import { ComponentUseEffect } from "./components/ComponentUseEffect/ComponentUseEffect";
import { FormComponent } from "./components/FormComponent/FormComponent";
import { AppProduct } from "./components/AppProduct/AppProduct";


export const App = () => {

    
  return (
    <div style={{display:"flex",flexDirection:"column",gap:"2vh"}}>    
        {/* <FormComponent />
        <PrimerComponente text={"Texto de prueba"} color={"red"} fontSize={2}/>
        <PrimerComponente text={"Texto de prueba 2"} color={"blue"} />
        <ComponentCounter />
        <ComponentUseEffect /> */}
        <AppProduct />
    </div>
  )
}
