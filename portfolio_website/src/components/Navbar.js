import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import '../styles/styles.css'

function NavbarComponent() {
    return (
        <>
            <Navbar bg="dark" variant='dark'>
                <Container className='navContainer'>
                    <Navbar.Brand href='/' className='navItem'>Logo</Navbar.Brand>
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