import React , {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { editarProductoAction } from "../actions/productoActions"

const EditarProducto = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  //Nuevo estado de producto
  const [ producto, guardarProducto ] = useState({
    nombre:"",
    precio: "",
    cantidad:""
  })

  const productoEditar = useSelector(state => state.productos.productoEditar)

  //Llenar el state automaticamente
  useEffect(()=>{
    guardarProducto(productoEditar)
  },[productoEditar])

  const onChangeFormulario = e =>{
    guardarProducto({
      ...producto,
      [e.target.name] :e.target.value,
      [e.target.precio]: e.target.value,
      [e.target.cantidad]: e.target.value
    })
  }
  

  const { nombre, precio, cantidad } = producto

  const submitEditarProducto = (e) =>{
    e.preventDefault();

    dispatch( editarProductoAction(producto))
    navigate("/")
  }

  return (
    <div className="row justify-content-center mt-4">
    <div className="col-md-8">
      <div className="card">
        <div className="card-body">
          <h2 className="text-center mb-4 font-weight-bold">
            Editar Producto
          </h2>

          <form onSubmit={submitEditarProducto}>
            <div className="form-group">
              <label>Nombre Producto</label>
              <input 
                type="text"
                className="form-control"
                placeholder="Nombre Producto"  
                name="nombre"
                value={nombre}
                onChange={onChangeFormulario}
              />
            </div>
            <div className="form-group">
              <label>Precio del Producto</label>
              <input 
                type="number"
                className="form-control"
                placeholder="Precio Producto"  
                name="precio"
                value={precio}
                onChange={onChangeFormulario}
              />
            </div>
            <div className="form-group">
              <label>Cantidad</label>
              <input 
                type="number"
                className="form-control"
                placeholder="Cantidad"  
                name="cantidad"
                value={cantidad}
                onChange={onChangeFormulario}
              />
            </div>
            <button  
              type="submit"
              className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
            >Guardar Cambios</button>
          </form>

        </div>
      </div>
    </div>
  </div>
  )
}

export default EditarProducto