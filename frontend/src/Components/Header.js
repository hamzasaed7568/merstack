import React from 'react'
import {Navbar,Nav,Container} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap"
import {Link} from 'react-router-dom'
const Header = () => {
    // console.log(match)

    return (
        <header>
            <Navbar bg="dark" varaint="dark" expand="lg" collapseOnSelect>
                <Container>
                    <LinkContainer to="/">
                    <Navbar.Brand>Vvork-Tech-Store</Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-auto">
                            <Link to="/cart">
                                <i className="fas fa-shopping-cart"></i> Cart
                            </Link>
                            <Link to="/login">
                               <i className="fas fa-user"></i> Sign In</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header
