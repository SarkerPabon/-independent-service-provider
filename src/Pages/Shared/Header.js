import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
	return (
		<>
			<Navbar bg='primary' variant='dark'>
				<Container>
					<Navbar.Brand as={Link} to='/'>
						ToothCare
					</Navbar.Brand>
					<Nav className='ms-auto'>
						<Nav.Link as={NavLink} to='home' className='text-white'>
							Home
						</Nav.Link>
						<Nav.Link as={NavLink} to='home#services' className='text-white'>
							Services
						</Nav.Link>
						<Nav.Link as={NavLink} to='about' className='text-white'>
							About
						</Nav.Link>
						<Nav.Link as={NavLink} to='/blog' className='text-white'>
							Blog
						</Nav.Link>
					</Nav>
				</Container>
			</Navbar>
		</>
	);
};

export default Header;
