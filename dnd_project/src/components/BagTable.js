import React, { Component} from 'react';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './BagTable.css'

export default class BagTable extends Component {
  constructor(props) {
    super(props);
    this.state = {quantity: 1};
    this.increaseQuantity = this.increaseQuantity.bind(this);
    this.decreaseQuantity = this.decreaseQuantity.bind(this);
  }
  increaseQuantity()
  {
    this.setState({quantity: this.state.quantity+1})
  }
  decreaseQuantity()
  {
    this.setState({quantity: this.state.quantity-1})
  }

    render() {
        return(
           <div>
            <Table striped bordered hover>
      <thead>
        <tr>
          <th>Quantity</th>
          <th>Item name</th>
          <th>discription</th>
         
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className= "scrollbutton">
          <Button variant="primary" size="sm" className='buttonsize' onClick={this.decreaseQuantity}> - </Button>{' '}
        <p>{this.state.quantity}</p>
          <Button variant="primary" size="sm" className='buttonsize' onClick={this.increaseQuantity}> + </Button>{' '}
         
          </td>
          
          <td>Mark</td>
          <td>Otto</td>
         
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          
        </tr>
      </tbody>
    </Table>

           </div>
        )
    }
}