import React from 'react'
import { Container } from "reactstrap";
function Footer() {
    return (
        <Container fluid className='text-center text-white text-uppercase fixed-bottom bg-dark p-3'>
            GitApp With Firebase &copy;{new Date().getFullYear()}
        </Container>
    )
}

export default Footer;