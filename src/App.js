import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//Redux
import { Provider } from "react-redux";
import store from "./store";

import Header from './components/Header';
import Productos from './components/Productos';
import NuevoProducto from './components/NuevoProducto';
import EditarProducto from './components/EditarProducto';


function App() {
  return (
    <Router>
      <Provider store = { store } >

        <Header />
      
        {/* Todo lo que esta fuera de Routes se mostrara en todas las paginas  */}
        <div className="container">
          <Routes>
            <Route  path="/" element={<Productos/>} />
            <Route path="/productos/nuevos" element={<NuevoProducto/>} />
            <Route path="/productos/editar/:id" element={<EditarProducto/>} />
          </Routes>
        </div>

      </Provider>
    </Router>
  );
}

export default App;
