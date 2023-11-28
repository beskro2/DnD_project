import './Notes.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function CreateNotePage() {
  //getdata from date and display in dev tools
  function getData(val)
  {
    console.warn(val.target.value)
  }
  return (
   

    <Form>
       <Row>
        <Col>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
      <Form.Label>Enter Date</Form.Label>
      <Form.Control type="date" placeholder="##/##/####" onChange={getData}/>
    </Form.Group>
        </Col>
        <Col>
        <Form.Label>Who is writing the note</Form.Label>
        <Form.Select aria-label="Default select example">
      <option>Select Author</option>
      <option value="1">Mia</option>
      <option value="2">Jody</option>
      <option value="3">Stephen</option>
    </Form.Select>
        </Col>
      </Row>

    

    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
      <Form.Label>Enter Note</Form.Label>
      <Form.Control as="textarea" rows={3} />
    </Form.Group>
    <Button href="/Notes">Submit</Button> 
  </Form>
   
  );
}

export default CreateNotePage;
