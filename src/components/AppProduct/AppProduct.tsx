import { useState } from "react"
import { FormProduct } from "./FormProduct/FormProduct"
import { Header } from "./Header/Header"
import { ListProduct } from "./ListProduct/ListProduct"

interface ItemsProduct {
    precio:number,
    imagen:string,
    nombre:string
}

export const AppProduct = () => {
    const [products,setProducts]=useState<ItemsProduct[]>([])
    console.log(products)
    const handleAddProduct=(newItem:ItemsProduct)=>{
        setProducts(prev=>[...prev,newItem])
    }
  return (
    <div>
        <Header />
        <h2 className="text-center">Formulario</h2>
        <FormProduct handleAddProduct={handleAddProduct} />
        <ListProduct arrItems={products} />
        {
          products.length>0 ? <ListProduct arrItems={products} />
          :(<h3 className="text-center">No hay productos</h3>)
        }
        <ListProduct arrItems={products} />
    </div>
  )
}
