import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useState } from 'react';


function DiceSimulatorPage() {

  const [selectedAdvantage , setAdvantage] = useState("1");
  const [selectedDiceQuantity , setDiceQuantity] = useState(null);
  const [selectedDiceType, setdiceType] = useState(null);
  const [roles, setRoles] = useState([]); 
  const temproles=[];
  const handleAdvantageChange = (event) => {
    setAdvantage(event.target.value);
    console.log("selected role: " , selectedAdvantage);
  };
  const handleDiceQuantityChange = (value) => {
    setDiceQuantity((prevDiceQuantityValue) => (prevDiceQuantityValue === value ? null : value));
  };
 const handleDiceTypeChange = (value) => {
    setdiceType((prevDiceTypeValue) => (prevDiceTypeValue === value ? null : value));
 };
 
 function rollDice(DiceQ, DiceT){
  for(let i =0; i< DiceQ; i++)
  {
   var t = Math.floor(Math.random()*(DiceT)+1);
   temproles.push(t);
  }
  setRoles(temproles);
   console.log(roles.toString());
 }

 
  return (
   <div>
    <div>
      Number of Dice:
      <ToggleButtonGroup 
      type="radio" 
      name="numDice" 
      value={selectedDiceQuantity}
      onChange={(value) => handleDiceQuantityChange(value)} 
      >


        <ToggleButton id="nd1" value={1}>
          1
        </ToggleButton>
        <ToggleButton id="nd2" value={2}>
          2
        </ToggleButton>
        <ToggleButton id="nd3" value={3}>
          3
        </ToggleButton>
        <ToggleButton id="nd4" value={4}>
          4
        </ToggleButton>
        <ToggleButton id="nd5" value={5}>
          5
        </ToggleButton>
        <ToggleButton id="nd6" value={6}>
          6
        </ToggleButton>
        <ToggleButton id="nd7" value={7}>
          7
        </ToggleButton>
        <ToggleButton id="nd8" value={8}>
          8
        </ToggleButton>
        <ToggleButton id="nd9" value={9}>
          9
        </ToggleButton>
        <ToggleButton id="nd10" value={10}>
          10
        </ToggleButton>
      </ToggleButtonGroup>
</div>
<p>{selectedDiceQuantity ? `Selected Value: ${selectedDiceQuantity}` : 'No value selected'}</p>
<div>
  Dice Type
        <ToggleButtonGroup
        type="radio"
        name="diceType" 
        value={selectedDiceType}
        onChange={(value) => handleDiceTypeChange(value)}>
      <ToggleButton id="dt1" value={4}>
          D4
        </ToggleButton>
        <ToggleButton id="dt2" value={6}>
          D6
        </ToggleButton>
        <ToggleButton id="dt3" value={8}>
          D8
        </ToggleButton>
        <ToggleButton id="dt4" value={10}>
          D10
        </ToggleButton>
        <ToggleButton id="dt5" value={12}>
          D12
        </ToggleButton>
        <ToggleButton id="dt6" value={20}>
          D20
        </ToggleButton>
        <ToggleButton id="dt7" value={100}>
          D100
        </ToggleButton>
      </ToggleButtonGroup>
    </div>   
    <p>{selectedDiceType ? `Selected Value: ${selectedDiceType}` : 'No value selected'}</p>
   Advantage:
   
    <Form.Select
    aria-label="Default select example" 
    className="advantage" 
    value={selectedAdvantage} 
    onChange={(value) => handleAdvantageChange(value)} >
    <option value="1">None</option>
    <option value="2">Advantage</option>
    <option value="3">Disadvantage</option>
    </Form.Select>
   
    <Button variant="primary"  onClick={() =>rollDice(selectedDiceQuantity, selectedDiceType)}> Roll Dice </Button>{' '}
    
    <ul>
      {roles.map((role, index) => (
        <li key={index}>{role}</li>
      ))}
    </ul>
   </div>
  );
  }

export default DiceSimulatorPage;
