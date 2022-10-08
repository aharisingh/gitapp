import React, { useState, useContext } from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    NavbarText
}
    from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import userContext from "../Context/UserContext";
function Header() {
    const context = useContext(userContext);
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    return (
        <div>
            <Navbar color="dark" expand="sm">
                <NavbarBrand>
                    <Link to="/" className="text-white">GitApp</Link>
                </NavbarBrand>
                <NavbarText className="text-white">
                    {
                        context.user?.email ? context.user.email : ""
                    }
                </NavbarText>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className='ms-auto' navbar>
                        {
                            context.user ?
                                (
                                    <NavItem>
                                        <NavLink
                                            onClick={() => context.setUser(null)}
                                            className='text-white'>
                                            SignOut
                                        </NavLink>
                                    </NavItem>
                                ) : (
                                    <React.Fragment>
                                        <NavItem>
                                            <NavLink tag={Link} to="/signup" className='text-white' >
                                                SignUp
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink tag={Link} to="/signin" className='text-white'>
                                                SignIn
                                            </NavLink>
                                        </NavItem>
                                    </React.Fragment>
                                )
                        }
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    )
}

export default Header