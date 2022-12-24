import React from 'react'
import { Link } from 'react-router-dom'


const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary justify-content-between">
      <div className='container'>
        <h1>
          <Link to={"/"} className="text-ligth">
            CRUD - React, Redux, REST API y Axios
          </Link>
        </h1>
        
        <Link 
            to={"/productos/nuevos" }
            className="btn btn-danger nuevo-post p-3 d-block d-md-inline-block rounded-lg ">
            Agregar Pruducto &#43;
        </Link>
      </div>
    </nav>
  )
}

export default Header
