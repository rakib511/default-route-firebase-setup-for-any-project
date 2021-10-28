
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import useAuth from '../../hooks/useAuth';


const Header = () => {
    const {user,logOut} = useAuth();
    return (
            <>
            <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg">
            <Container>
            <Navbar.Brand href="#home"><span className="text-danger">ABC</span></Navbar.Brand>

            <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Nav.Link as={Link} to="/home">Home</Nav.Link>
                    <Nav.Link as={Link} to="/addData">AddData</Nav.Link>
                    <Nav.Link as={Link} to="/updateData">UpdateDate</Nav.Link>
                    <Nav.Link as={Link} to="/deleteData">DeleteData</Nav.Link>
                    { user?.email?
                        <button onClick={logOut} className='btn btn-danger'>Logout</button>:
                    <Nav.Link as={Link} to="/login">Login</Nav.Link>}
                        
                    
                        
                    
                <Navbar.Text>
                    Signed in as: <a href="#login">{user.displayName}</a>
                </Navbar.Text>
            </Navbar.Collapse>
            </Container>
        </Navbar>
            </>

    );
};

export default Header;