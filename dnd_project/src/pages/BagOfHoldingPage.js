import './Notes.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import './BagOfHolding.css';
import Form2 from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';

import InputGroup from 'react-bootstrap/InputGroup';
import { useState } from 'react';



function BagOfHoldingPage() {

  const [inputarr,setInputarr]= useState([{quantity:1,name:"excalibur", discription:"The legandary sword king arthur pulled from the stone"},{quantity:20,name:"Arrow", discription:"barbed arrows"},{quantity:1,name:"cow", discription:"a regular brown cow"}])

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
    quantity: Math.max(0,prevInputData.quantity-1), 
  }));
 }
 

  function changehandle(e){
  
  setInputData({...inputdata,[e.target.name]:e.target.value})
  
  }

  const handleQuantityChange = (index, increment) => {
    const updatedInputArr = [...inputarr];
    updatedInputArr[index].quantity = Math.max(0,updatedInputArr[index].quantity + increment);
    setInputarr(updatedInputArr);
  }
  
  const handledeleteentry = (index) => {
    const updatedInputArr = [...inputarr];
    updatedInputArr.splice(index,1);
    setInputarr(updatedInputArr);
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
        <Card className='inputcard'>
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

<table  className="table" >
  <tbody>
  <tr>
    <td>Quantity</td>
    <td>Item</td>
    <td>Description</td>
    <td>delete</td>
  </tr>
  {
    inputarr.map(
      (info,index)=>{
        return(
          <tr key = {index}>
            <td > 
            <div className="scrollbutton">
            <Button variant="primary" size="sm" className="buttonsize"  onClick={() =>handleQuantityChange(index,-1)} > - </Button>{' '}
            {info.quantity} 
            <Button variant="primary" size="sm" className="buttonsize" onClick={() => handleQuantityChange(index,+1)} > + </Button>{' '}
            </div>
            </td>
            <td>{info.name}</td>
            <td>{info.discription}</td>
            <td><Button variant="primary" size="sm"   onClick={() =>handledeleteentry(index)} >delete</Button>{' '}</td>
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
