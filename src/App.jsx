

import './App.css'
import Formulario from './component/Formulario'
import Register from './component/register/Register';
import Home from './home/Home';
import Login from './login/Login';
import Rutas from './navbar/Rutas'
import {  BrowserRouter, Route, Routes } from "react-router-dom";
import {ProtectedRoutes} from './rutas/ProtectedRoutes';
import Ticket from './ticket/Ticket';
import Error404 from './errores/Error404';


function App() {
  

  return (
    <BrowserRouter>
    <Rutas/>
    <div>
      <Routes>
      <Route path='/' element={<Login />} /> 
      <Route path='/Register' element={<Register />} /> 
      

      
      <Route element ={<ProtectedRoutes/>}> 
      <Route path='/Formulario' element={<Formulario/>}/>
      <Route path='/Home' element={<Home />} /> 
      
      </Route>
      <Route path='/Ticket' element={<Ticket />} />
      <Route path="*" element={<Error404 />} />
      </Routes>
        
     
    </div>
    </BrowserRouter>
      
      
    
  )
      
}

export default App
