import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
export default class NavBarComp extends Component {
    render() {
        return(
           <div>
             
                 <Navbar expand="lg" className="test" bg="dark" data-bs-theme="dark">
                   <Container>
                      <Navbar.Brand href="#">DnD</Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link href="/DiceSimulator">Dice Simulator</Nav.Link>
                            <Nav.Link href="/CharacterLibrary">NPC Library</Nav.Link>
                            <Nav.Link href="/BagOfHolding">Bag of Holding</Nav.Link>
                            <Nav.Link href="/notes">Notes</Nav.Link>
                        </Nav>
                   </Container>
                 </Navbar>
             
           </div>
        )
    }
}