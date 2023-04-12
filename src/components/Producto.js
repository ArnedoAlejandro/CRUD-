import React from 'react'
import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { borrarProductoAction, obtenerProductoEditar } from "../actions/productoActions"

const Producto = ({producto}) => {

    const { nombre, precio,cantidad,total, id } = producto

    const dispatch = useDispatch()
    //Redireccion
    const navigate = useNavigate();

    //Confirmar eliminacion
    const confirmarEliminarProducto = (id) =>{
    //Preguntar al usuario
    Swal.fire({
        title: '¿Desea eliminar el producto?',
        text: "Una vez eliminado no se podra acceder mas al mismo",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Eliminar',
        cancelButtonText: "Cancelar"
        }).then((result) => {
        if (result.isConfirmed) {
        //Pasamos la accion
            dispatch(borrarProductoAction(id))   
        }
    })
    }

    const redireccionarEdicion = producto =>{
        dispatch(obtenerProductoEditar(producto))
        navigate(`/productos/editar/${producto.id}`)
    }

  return (
    
      <tr className='text-center'>
        <td>{nombre}</td>
      
        {/* <td>{cantidad}</td> */}
        <td><span className="font-weight-bold text-center">$ {precio}</span></td>
        
        <td ><span className="font-weight-bold text-center">{cantidad}</span></td>

        <td><span className="font-weight-bold text-center ">${total}</span></td>

        <td className="acciones">
            <button
                type='button'
                onClick={() => redireccionarEdicion(producto)}  
                className="btn btn-primary mr-2">Editar
            </button>
            <button className="btn btn-danger"
                onClick={ () => confirmarEliminarProducto(id)}
            >
                Eliminar
            </button>
        </td>
       
      </tr>
    
  )
}

export default Producto
