import { combineReducers } from "redux";
import productosReducer from "./productosReducer";
import alertaReducer from "./alertaReducer";


//comnineRedurecs nos sirve para agrupar diferentes redecer 
export default combineReducers({
    productos: productosReducer,
    alerta: alertaReducer
});
