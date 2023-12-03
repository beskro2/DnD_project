import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function NotesCard(props) {
        return(
           <div>
              <Card>
      <Card.Header as="h5">Featured</Card.Header>
      <Card.Body>
        <Card.Title>{props.note.name} ({props.note.date})</Card.Title>
        <Card.Text>
         {props.note.note}
        </Card.Text>
       
      </Card.Body>
    </Card>
           </div>
        )
    }
