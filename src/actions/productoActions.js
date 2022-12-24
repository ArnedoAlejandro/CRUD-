import clienteAxios from "../config/axios"
import Swal from 'sweetalert2'
import { 
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR,
    COMENZAR_DESCARGA_PRODUCTOS,
    DESCARGA_PRODUCTOS_EXITO,
    DESCARGA_PRODUCTOS_ERROR,
    OBTENET_PRODUCTO_ELIMINAR,
    PRODUCTO_ELIMINADO_EXITO,
    PRODUCTO_ELIMINADO_ERROR,
    OBTENER_PRODUCTO_EDITAR,
    PRODUCTO_EDITADO_EXITO,
    PRODUCTO_EDITADO_ERROR,
    COMENZAR_EDICION_PRODUCTO

} from "../types"

export function crearNuevoProductoAction(producto) {
    return async (dispatch) =>{
        dispatch( agregarProducto() )
    
        try {
            //Llamada 
            await clienteAxios.post("/productos", producto)
            //Actualizar el estado
            dispatch(agregarProductoExito(producto))

            //SwitAlerta
            Swal.fire(
                'Correcto!',
                'El producto se agrego correctamente!',
                'success'
              )
        } catch (error) {
            console.log(error)
            dispatch(agregarProductoError(true))
            //Alerta de error
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Algo salio mal!'
              })
        }
    
    }
}

const agregarProducto = () =>({
    type : AGREGAR_PRODUCTO,
    payload: true
    
})

const agregarProductoExito = (producto) =>({
    type: AGREGAR_PRODUCTO_EXITO,
    payload: producto
})

const agregarProductoError = (estado) =>({
    type: AGREGAR_PRODUCTO_ERROR,
    payload: estado
})

//Descarga de productos de base de datos
export function obtenerProductosAction() {
    return async(dispatch)=>{
        dispatch(descargarProductos())
    
        try {
            const respuesta = await clienteAxios.get("/productos")
            dispatch(descargaProductosExitosa(respuesta.data))
        } catch (error) {
            console.log(error)
            dispatch(descargaProductosError())
        }
    }
}

const descargarProductos = () =>({
    type: COMENZAR_DESCARGA_PRODUCTOS,
    payload: true
})

const descargaProductosExitosa = productos =>({
    type: DESCARGA_PRODUCTOS_EXITO,
    payload: productos
})

const descargaProductosError = () =>({
    type: DESCARGA_PRODUCTOS_ERROR,
    payload: true
})
  
//Selecciona elemento para eliminar
export function borrarProductoAction (id) {
    return async(dispatch) =>{
        dispatch(obtenerProductoEliminar(id))
        
        try {
            await clienteAxios.delete(`/productos/${id}`)
            dispatch(eliminarProductoExito())   
            //Si se elimina mostrar alerta
            Swal.fire(
                'Eliminado!',
                'Se elimino con exito',
                'success'   
                ) 

         } catch (error) {
             console.log(error)
             dispatch(eliminarProductoError())
        }
    }
}

const obtenerProductoEliminar= (id) =>({
    type: OBTENET_PRODUCTO_ELIMINAR,
    payload: id
})
const eliminarProductoExito = () =>({
    type: PRODUCTO_ELIMINADO_EXITO,
})
const  eliminarProductoError = () =>({
    type: PRODUCTO_ELIMINADO_ERROR,
    payload: true
})

//Colocar producto en edicion
export function obtenerProductoEditar(producto){
    return (dispatch) =>{
        dispatch(obtenerProductoEditarAction(producto))
    }
}

const obtenerProductoEditarAction = producto =>({
    type: OBTENER_PRODUCTO_EDITAR,
    payload: producto
})

export function editarProductoAction (producto) {
    return  async (dispatch) => {
        dispatch(editarProducto(producto))
        dispatch( editarProductoExito(producto))
        try {
            await clienteAxios.put(`productos/${producto.id}`, producto)  
            
        } catch (error) {
            console.log(error)
            dispatch(productoEditadoError())
        }
    }
}

const editarProducto = (producto) => ({
    type: COMENZAR_EDICION_PRODUCTO,
})
const editarProductoExito = (producto) =>({
    type: PRODUCTO_EDITADO_EXITO,
    payload: producto
})
const productoEditadoError = (producto) =>({
    type: PRODUCTO_EDITADO_ERROR,
    payload: true
})