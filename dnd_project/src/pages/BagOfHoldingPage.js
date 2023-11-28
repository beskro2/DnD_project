import './Notes.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import BagTable from 'C:/Users/eskro/OneDrive/fall 2023 classes/Human computer interactions/DnD_project/dnd_project/src/components/BagTable';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function BagOfHoldingPage() {
  return (
   <div>
    <Container>
      <Row>
        <Col>test1</Col>
        <Col>
        <BagTable/>
        </Col>
      </Row>
      <Row>
        <Col>aaaa</Col>
        <Col>bbbbb</Col>
        <Col>ccccc</Col>
      </Row>
    </Container>
     
  
       
        <p>
         bag of holding page
         
        </p>
        
        </div>
  );
}


export default BagOfHoldingPage;
