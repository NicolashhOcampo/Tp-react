import { useForm } from "../../hocks/useForm"

export const FormComponent = () => {
    
    const {values,handleChange,resetForm}=useForm({
        email:'',
        nombre:'',
        edad:0
    })
    const {email,nombre,edad}=values
    
    const handleSumbitForm=()=>{
        console.log(values)
    }
    const handleResetForm=()=>{
        resetForm();
    }
    return (
    <div>
        <div>
            <h2>Formulario</h2>
        </div>
        <div style={{display:"flex",flexDirection:"column", gap:"2vh"}}>
            <input type="email" name="email" value={email} onChange={handleChange} placeholder="Mail"/>
            <input type="text" name="nombre" value={nombre} onChange={handleChange} placeholder="Nombre"  />
            <input type="number" name="edad" value={edad} onChange={handleChange} placeholder="Edad" />
        </div>
        <div>
            <button onClick={handleSumbitForm}>Enviar</button>
            <button onClick={handleResetForm}>Reset</button>
        </div>

    </div>
  )
}
