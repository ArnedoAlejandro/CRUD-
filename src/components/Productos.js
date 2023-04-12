import React, {Fragment, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { obtenerProductosAction } from "../actions/productoActions"
import Producto from "./Producto"

const Productos = () => {
 
  const dispatch = useDispatch()

  useEffect(()=>{
    //consultar api
    const cargarProductos = () => dispatch(obtenerProductosAction())
    cargarProductos()
  },[])
  
  
  //Obtener el state
  const productos = useSelector((state)=> state.productos.productos)
  const error = useSelector( state => state.productos.error)
  const cargando = useSelector( state => state.productos.loading)
  


  return (
    <Fragment>
      <h2 className="text-center my-5">Listado de Productos</h2>

      { error ? <p className="font-weight-bold alert alert-danger text-center mt-4">
        Hubo un error</p> : null }
        
      { cargando ? <p className="font-weight-bold text-center">Cargando...</p> : null }

      <table className=" justify-items-center table w-100 table-striped text-center">
        <thead className="bg-primary justify-center table-dark ">
          <tr>
            <th scope="col">Producto</th>
            <th scope="col">Precio unitario</th>
            <th scope="col">Cantidad</th>
            <th scope="col">Total</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>

        <tbody>
          { productos.length === 0 ? "No hay productos" : (
            productos.map( (producto) => 
              <Producto 
                  key={producto.id} 
                  producto={producto}       
              />)
          ) }
        </tbody>
        
      </table>
    </Fragment>
  )
}

export default Productos