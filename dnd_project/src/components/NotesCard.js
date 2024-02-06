import Card from 'react-bootstrap/Card';
import './NotesCard.css';

export default function NotesCard(props) {
        return(
           <div>
              <Card className='cards'>
      <Card.Header as="h5">{props.note.name} ({props.note.date})</Card.Header>
      <Card.Body>
        <Card.Text>
         {props.note.note}
        </Card.Text>
       
      </Card.Body>
    </Card>
           </div>
        )
    }
