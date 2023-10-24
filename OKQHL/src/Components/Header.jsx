import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import "./Header.css"
function Header() {

    return (
        <Navbar expand="lg" className="bg-body-tertiary py-2 py-md-1 text-capitalize navlinks bg-color" fixed='top'>
            <Container className="py-1 text-white">
                <Navbar.Brand to="/">
                    <img src="logo.png" className='img-fluid'></img>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link to="/">
                            Home
                        </Nav.Link>
                        <Nav.Link to="/about">
                            About Us
                        </Nav.Link>
                        <Nav.Link to="/skills">
                            Membership
                        </Nav.Link>
                        <Nav.Link to="/education">
                            Ancestors         
                               </Nav.Link>
                        <Nav.Link to="/experience">
                            Officers           
                             </Nav.Link>
                        <Nav.Link to="/projects">
                            Contact Us            
                            </Nav.Link>
                    </Nav>
                  
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
