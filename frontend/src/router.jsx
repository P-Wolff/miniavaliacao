import { BrowserRouter, Routes, Route } from "react-router-dom";


import Home from './pages/home';
import Consultar from './pages/consultar';
import Cadastrar from './pages/cadastrar';



export default function Navegation() {
    
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />}  />
                <Route path='/consultar' element={<Consultar />} />
                <Route path='/consultar/:id' element={<Consultar />} />

                <Route path='/cadastrar' element={<Cadastrar />} />            
            </Routes>
      </BrowserRouter>
    );
}