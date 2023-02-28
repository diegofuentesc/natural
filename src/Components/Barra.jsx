import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom';

const Barra = () => {
  return (
  


<Navbar bg="success" variant="dark">
        <Container>
          <Nav className="me-auto">
          <Link  to="/"><Navbar.Brand>Home</Navbar.Brand></Link>
          <Link  to="/favoritos"><Navbar.Brand>Favoritos</Navbar.Brand></Link>
          </Nav>
        </Container>
      </Navbar>
    
  )
}

export default Barra