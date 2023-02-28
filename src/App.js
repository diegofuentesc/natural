import { useEffect, useState } from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Barra from "./Components/Barra.jsx";
import Home from "./Views/Home.jsx";
import Favoritos from "./Views/Favoritos.jsx";
import MiContexto from "./Contexts/MiContexto.jsx";
import './Css/Style.css';




function App() {

  const [fotos, setFotos] = useState([]);
  const estadoGlobal = {fotos, setFotos};

  async function getFotos() {  //Consumo de Api con funcion asincrona

    const res = await fetch('http://localhost:3000/fotos.json');
    const data = await res.json();
    
    setFotos(data.photos);
    
  }

  useEffect(() => {
    getFotos();

  }, []);

 

  return (
    <div className="App">
      <MiContexto.Provider value={estadoGlobal}>
      <BrowserRouter>
        <Barra></Barra>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/favoritos" element={<Favoritos></Favoritos>}></Route>
        </Routes>
      </BrowserRouter>
      </MiContexto.Provider>
     
    </div>
  );
}

export default App;
