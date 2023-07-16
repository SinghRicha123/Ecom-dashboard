import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom'

function Header() {
    return (
        <>
            <Navbar expand="lg" bg="dark" data-bs-theme="dark" className="bg-body-warning">
                <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
                <Nav className="mr-auto nav_bar_wapper">
                    <Link to="/add" className='navbar_link'>AddProduct</Link>
                    <Link to="/update" className='navbar_link'>UpdateProduct</Link>
                    <Link to="/login" className='navbar_link'>Login</Link>
                    <Link to="/register" className='navbar_link'>Register</Link>

                </Nav>
            </Navbar>
        </>
    )
}

export default Header;