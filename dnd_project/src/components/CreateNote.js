import '../pages/Notes.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { useState } from 'react';
function CreateNotePage(props) {
  //getdata from date and display in dev tools
  function getDate(val)
  {
    console.warn(val.target.value)
    setdate(val.target.value)
  }

  function getAuthor(val)
  {
    console.warn(val.target.value)
    setauthor(val.target.value)
  }
  function getNote(val)
  {
    console.warn(val.target.value)
    setnote(val.target.value)
  }
  function handleSubmitButton(e)
  {
    e.preventDefault()
    props.create(date,author,note)
    console.log("test")
  }
  
  const [date, setdate]= useState("");
  const [author, setauthor]= useState("");
  const [note, setnote]= useState("");
  

  return (
   
    
    <Form>
       <Row>
        <Col>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
      <Form.Label>Enter Date</Form.Label>
      <Form.Control type="date" placeholder="##/##/####" onChange={getDate}/>
      
    </Form.Group>
        </Col>
        <Col>
        <Form.Label>Who is writing the note</Form.Label>
        <Form.Select aria-label="Default select example" onChange={getAuthor}>
      <option>Select Author</option>
      <option value="Mia">Mia</option>
      <option value="Jody">Jody</option>
      <option value="Stephen">Stephen</option>
    </Form.Select>
        </Col>
      </Row>


    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
      <Form.Label>Enter Note</Form.Label>
      <Form.Control as="textarea" rows={8} onChange={getNote}/>
    </Form.Group>
    <Button   onClick={handleSubmitButton} >Submit</Button> 
  </Form>
  
  );
}

export default CreateNotePage;
