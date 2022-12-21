import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import '../styles/styles.css'

function NavbarComponent() {
    return (
        <>
            <Navbar bg="dark" variant='dark' className='ms-auto'>
                <Container className='navContainer logoContainer'>
                    <Navbar.Brand href='/' className='navItem'>
                        <img
                            src="./images/logo.jpg"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                            alt="logo"
                        />
                    </Navbar.Brand>
                </Container>
                <Container className='navContainer linkContainer'>
                    <Nav.Link href='/' className='navItem'>Home</Nav.Link>
                    <Nav.Link href='/portfolio' className='navItem'>Portfolio</Nav.Link>
                    <Nav.Link href='/about' className='navItem'>About</Nav.Link>
                    <Nav.Link href='/contact' className='navItem'>Contact</Nav.Link>
                </Container>
            </Navbar>
        </>
    );

}

export default NavbarComponent