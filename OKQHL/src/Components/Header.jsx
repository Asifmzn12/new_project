import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
function Header() {

    return (
        <Navbar expand="lg" className="bg-body-tertiary py-2 py-md-3 text-uppercase navlinks" fixed='top'>
            <Container className="py-2 text-white">
                <Navbar.Brand to="/">
                    <img src="image/Asif ali.png" className='img'></img>
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
