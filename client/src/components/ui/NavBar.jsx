import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

export default function NavBar() {
  return (
    <Navbar className="bg-body-tertiary">
    <Container>
      <Navbar.Brand href="/"> Quiz </Navbar.Brand>
    </Container>
  </Navbar>
  )
}
