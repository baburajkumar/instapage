import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavbarStyles.css';
function NavScrollExample() {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
            <div class="container-fluid">
            <h1>Instagram</h1></div>
        <Navbar.Toggle aria-controls="navbarScroll" />  
        <Navbar.Collapse id="navbarScroll">
         <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search "
              className="me-2"
              aria-label="Search"
            />
          </Form>
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '200px' }}
            navbarScroll
          >
          </Nav>
          <div class="container-fluid">
          <Button variant="primary">Login</Button>{' '}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <button type="submit" class="signupbtn">Sign Up</button>
          </div>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;