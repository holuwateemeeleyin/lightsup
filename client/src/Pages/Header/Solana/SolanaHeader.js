import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, Container } from 'react-bootstrap'
import './SolanaHeader.css'

export default function SolanaHeader() {
    return (
        <div className='header_container'>
            <Navbar collapseOnSelect expand="lg" variant="dark">
                <Container>
                    <LinkContainer to="/">
                        <Navbar.Brand className='header-logo'>Lights Up</Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                        <Nav>
                            <LinkContainer to='/solana'>
                                <Nav.Link className='header-nav'>SOLANA</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to='/add-solana'>
                                <Nav.Link className='header-nav'>ADD NFT</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to='/promote'>
                                <Nav.Link className='header-nav'>PROMOTE</Nav.Link>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}
