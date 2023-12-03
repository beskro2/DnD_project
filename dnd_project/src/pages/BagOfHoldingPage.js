import './Notes.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import BagTable from 'C:/Users/eskro/OneDrive/fall 2023 classes/Human computer interactions/DnD_project/dnd_project/src/components/BagTable';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { Component } from 'react';
import './BagOfHolding.css';
import Form2 from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import InputGroup from 'react-bootstrap/InputGroup';
import { useState } from 'react';



function BagOfHoldingPage() {

  const [inputarr,setInputarr]= useState([])

  const[inputdata, setInputData] = useState({quantity: 0, name: "", discription: ""})
  
 

  function increaseQuantity(){
    setInputData(prevInputData => ({
      ...prevInputData,
      quantity: prevInputData.quantity+1, 
    }));
   }
  
 function decreaseQuantity(){
  setInputData(prevInputData => ({
    ...prevInputData,
    quantity: prevInputData.quantity-1, 
  }));
 }

  function changehandle(e){
  
  setInputData({...inputdata,[e.target.name]:e.target.value})
  
  }
  
  
  

  function submit(){
  setInputarr([...inputarr,{
    quantity: inputdata.quantity,
    name: inputdata.name ,
    discription: inputdata.discription
  }])
  console.log(inputarr)
  console.log(inputdata)
  }

  
  return (
   <div>
    <Container>
      <Row>
        <Col>


        <Card style={{ width: '18rem' }}>
      
      <Card.Body>

          

        <Card.Title>Create Item</Card.Title>

        <InputGroup className="mb-3">
            <InputGroup.Text >Item Name</InputGroup.Text>
            <Form.Control aria-label="Item Name name" name='name' value={inputdata.name} onChange={changehandle}  />
           </InputGroup>

        <Card.Text>
            <Form2.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form2.Label>Discription</Form2.Label>
              <Form2.Control as="textarea" rows={8} name='discription' value={inputdata.discription} onChange={changehandle} />
          </Form2.Group>
        </Card.Text>
          
          <constructor/>
        <td className="scrollbutton">
            <title>Quantity</title>
            <Button variant="primary" size="sm" className="buttonsize"  onClick={decreaseQuantity} > - </Button>{' '}
            <p>{inputdata.quantity}</p>
            <Button variant="primary" size="sm" className="buttonsize" onClick={increaseQuantity} > + </Button>{' '}
          </td>

      </Card.Body>
     
      <Card.Body>
      <Button variant="primary"size="sm" onClick={submit} > Submit </Button>{' '}
      </Card.Body>
    </Card>
   
    </Col>
       <Col>
<table border={1}  width="30%" cellPadding={10}>
  <tbody>
  <tr>
    <td>Quantity</td>
    <td>Item name</td>
    <td>Description</td>
  </tr>
  {
    inputarr.map(
      (info,ind)=>{
        return(
          <tr>
            <td>{info.quantity}</td>
            <td>{info.name}</td>
            <td>{info.discription}</td>
          </tr>
        )
      }
  )
  }
  </tbody>
</table>
        
        </Col>
      </Row>
      
    </Container>
     
        
        </div>
  );
}


export default BagOfHoldingPage;
