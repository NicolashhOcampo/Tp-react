import { Button, Form, FormLabel } from "react-bootstrap"
import { useForm } from "../../../hocks/useForm"
import { FC } from "react"

interface IPropsFormProduct {
    handleAddProduct:Function
}

export const FormProduct:FC<IPropsFormProduct> = ({handleAddProduct}) => {

    const {handleChange,values,resetForm}=useForm({
        nombre:'',
        imagen:'',
        precio: 0
    })

    const handleSumbitForm=()=>{
        handleAddProduct(values)
        resetForm()
    }

  return (
    <Form className="p-4 border rounded m-3">
        <Form.Group controlId="formNombre">
            <FormLabel> Nombre</FormLabel>
            <Form.Control type="text" name="nombre" value={values.nombre} onChange={handleChange} placeholder="Ingrese nombre del Producto" />
        </Form.Group> 
        <Form.Group controlId="formImagen">
            <FormLabel> Imagen</FormLabel>
            <Form.Control type="text" name="imagen" value={values.imagen} onChange={handleChange} placeholder="Ingrese url de imagen" />
        </Form.Group>  
        <Form.Group controlId="formPrecio">
            <FormLabel> Precio</FormLabel>
            <Form.Control type="number" name="precio" value={values.precio} onChange={handleChange} placeholder="Ingrese precio del Producto" />
        </Form.Group> 
        <div className="d-flex justify-content-center mt-4">
            <Button onClick={handleSumbitForm} variant="primary">Guardar Producto</Button>
        </div>
    </Form>
  )
}
