
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

export default function CharacterCards(props) {
    return (
           <div>
        <Card  style={{ width: '18rem', margin:'30px'}}>
      <Card.Body>
        <Card.Title>{props.npc.name}</Card.Title>
        <Card.Text>
         {props.npc.note}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Race: {props.npc.race}</ListGroup.Item>
        <ListGroup.Item>class: {props.npc.class}</ListGroup.Item>
        <ListGroup.Item>Alignment: {props.npc.alignment}</ListGroup.Item>
      </ListGroup>
      
    </Card>
           </div>
        
    )
}