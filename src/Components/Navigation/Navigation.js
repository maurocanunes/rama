import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
// import {useState} from 'react';
import Image from 'react-bootstrap/Image';
import Cookies from 'js-cookie';
// import { useNavigate } from 'react-router-dom';

function Navigation() {

  let comp = <>
  
    <Nav className='justify-content-end'>
      <Nav.Link href='/login'>
        <Image src={require('./icons8-login-arredondado-à-direita-50.png')} rounded />
      </Nav.Link>
    </Nav>
  </>

  if (!!Cookies.get('auth')) {
    comp = <>
      <Navbar.Offcanvas
        id={`offcanvasNavbar-expand-sm`}
        aria-labelledby={`offcanvasNavbarLabel-expand-sm`}
        placement="end"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title id={`offcanvasNavbarLabel-expand-sm`}>
            Menu
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="justify-content-end flex-grow-1 pe-3">
            <Nav.Link href="#action1">Doing</Nav.Link>
            <Nav.Link href="#action2">TODO</Nav.Link>
            <NavDropdown
              title="Dropdown"
              id={`offcanvasNavbarDropdown-expand-sm`}
            >
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Navbar.Collapse className="justify-content-end">
              <NavDropdown 
                // title={`Signed in as: ${this.props.user.name}`}
                id={`offcanvasNavbarDropdown-expand-sm`}>
                <NavDropdown.Item eventKey={'profile'}>
                  My Profile
                </NavDropdown.Item>
                <NavDropdown.Item eventKey={'logout'}>
                  Log Out
                </NavDropdown.Item>

              </NavDropdown>
            </Navbar.Collapse>
          </Nav>
        </Offcanvas.Body>
      </Navbar.Offcanvas>
    </>
  }
  return(
    <>
        <Navbar  variant='light' key='sm' expand='sm' className="bg-white sticky-top mb-3">
          <Container fluid>
            <Navbar.Brand className="link dim black mw5 dt hide-child pa1 br2 pointer" href='/' >Oportunities</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-sm`} />
            <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
                
            {comp}
          </Container>
        </Navbar>
    </>
  );
}

export default Navigation;