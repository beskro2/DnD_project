import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

export default class CharacterCards extends Component {
    render() {
        return(
           <div>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
      <Card.Body>
        <Card.Title>Name Place Holder</Card.Title>
        <Card.Text>
         short discription place holder. if when when if if when when if if when when if.
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Race:</ListGroup.Item>
        <ListGroup.Item>Age:</ListGroup.Item>
        <ListGroup.Item>Alignment Chart:</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
           </div>
        )
    }
}