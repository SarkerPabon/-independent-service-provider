import { signOut } from "firebase/auth";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, NavLink } from "react-router-dom";
import auth from "../../firebase.init";

const Header = () => {
	const [user] = useAuthState(auth);

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
						{user ? (
							<button
								onClick={() => signOut(auth)}
								className='btn btn-primray btn-link text-white text-decoration-none'
							>
								Sign Out
							</button>
						) : (
							<>
								<Nav.Link as={NavLink} to='/register' className='text-white'>
									Register
								</Nav.Link>
								<Nav.Link as={NavLink} to='/login' className='text-white'>
									Login
								</Nav.Link>
							</>
						)}
					</Nav>
				</Container>
			</Navbar>
		</>
	);
};

export default Header;
