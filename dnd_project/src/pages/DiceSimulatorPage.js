import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useState } from 'react';
import './DiceSimulator.css';

function DiceSimulatorPage() {

  const [selectedAdvantage , setAdvantage] = useState("1");
  const [selectedDiceQuantity , setDiceQuantity] = useState(null);
  const [selectedDiceType, setdiceType] = useState(null);
  const [roles, setRoles] = useState([]); 
  let temproles=[];
  let temproles2=[];
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
 
function RollDice (DiceQ, DiceT) {
  // loop for amount of dice
  for(let i =0; i< DiceQ; i++)
  {
  //generates a random number within context of selected dice type
   var t = Math.floor(Math.random()*(DiceT)+1);
   // adds roles to tamp array
   temproles.push(t);
   
  }
}

 function advantagefilter(){
  //if user selects none
  if(selectedAdvantage === "1" )
  {
  RollDice(selectedDiceQuantity, selectedDiceType);

  setRoles(temproles);
  //sets roles to the values in temproles
   console.log(roles.toString());
 }

 //if user selects advatage
else if(selectedAdvantage === "2")
{
  temproles.push("first roles");
  RollDice(selectedDiceQuantity, selectedDiceType)
  temproles.push("Second roles");
  RollDice(selectedDiceQuantity, selectedDiceType)
  let y = 1;
 
  for(let p= (temproles.length/2)+1; p<temproles.length; p++)
  {
    if(temproles[y] > temproles[p])
    {
      temproles2.push(temproles[y]);
    }
    else{
      temproles2.push(temproles[p]);
    }
    y=y+1;
  }
  temproles.push("Use:");
  temproles = temproles.concat(temproles2);

  //sets roles to the values in temproles
  setRoles(temproles);
}
//if user selects disadvantage
else if(selectedAdvantage === "3")
{
  temproles.push("first roles");
  RollDice(selectedDiceQuantity, selectedDiceType)
  temproles.push("Second roles");
  RollDice(selectedDiceQuantity, selectedDiceType)
  let y = 1;
 
  for(let p= (temproles.length/2)+1; p<temproles.length; p++)
  {
    if(temproles[y] < temproles[p])
    {
      temproles2.push(temproles[y]);
    }
    else{
      temproles2.push(temproles[p]);
    }
    y=y+1;
  }
  temproles.push("Use:");
  temproles = temproles.concat(temproles2);

  //sets roles to the values in temproles
  setRoles(temproles);
   
}
}

 
  return (
   <div>
    <h1 className='headers'>
    Number of Dice
    </h1>
      
      <div className = 'selectorD'>
      <ToggleButtonGroup 
      className='selector'
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


<h2 className='headers'>
  Dice Type
</h2>
  
  <div className = 'selectorD'>
        <ToggleButtonGroup
        className='selector'
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
    
   
   <div className='advantaceSpacing'>
    <h3 className='headers'> Advantage</h3>
    <Form.Select
    aria-label="Default select example" 
    className="advantage" 
    value={selectedAdvantage} 
    onChange={(value) => handleAdvantageChange(value)} >
    <option value="1">None</option>
    <option value="2">Advantage</option>
    <option value="3">Disadvantage</option>
    </Form.Select>
    </div>
    <div className = 'buttonD'>
    <Button variant="primary"  onClick={() =>advantagefilter()}> Roll Dice </Button>{' '}
    </div>

    <p>{selectedDiceQuantity ? `Selected Value: ${selectedDiceQuantity}` : 'No value selected'}</p>
    <p>{selectedDiceType ? `Selected Value: ${selectedDiceType}` : 'No value selected'}</p>
    <ul>

      {roles.map((role, index) => (
        <li key={index}>{role}</li>
      ))}
    </ul>
   </div>
  );
  }

export default DiceSimulatorPage;
