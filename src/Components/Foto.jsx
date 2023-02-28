import React, { useContext } from 'react';
import Card from 'react-bootstrap/Card';
import MiContexto from '../Contexts/MiContexto';
import { FaHeart } from "react-icons/fa";


const Foto = ({ fav, foto }) => {
  const { fotos, setFotos } = useContext(MiContexto);
  const setFavoritos = (id) => {
    const fotoConClick = fotos.findIndex((f) => f.id === id);
    fotos[fotoConClick].liked = !fotos[fotoConClick].liked;
    setFotos([...fotos]);

  }

  return (


    <div class="container">
      <div class="row">
        <div class="col">
          <Card.Img className='imagen' variant="top" src={foto.src.medium} />
          <Card.Text>
          <p className='icono'>{!fav && <FaHeart onClick={() => setFavoritos(foto.id)} style={{ color: foto.liked ? "red" : "white" }}></FaHeart>}</p>
          <div className='txt'>
          <p className='texto'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          </Card.Text>
        </div>
      </div>
    </div>



  )
}

export default Foto