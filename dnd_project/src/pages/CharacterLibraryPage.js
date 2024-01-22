import './Notes.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CharacterCards from 'C:/Users/eskro/OneDrive/fall 2023 classes/Human computer interactions/DnD_project/dnd_project/src/components/CharacterCards';

import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import InputGroup from 'react-bootstrap/InputGroup';

import Button from 'react-bootstrap/Button';



function CharacterLibraryPage() {

  const [npcArray,setnpcArray]= useState([
    {name:'Stew Litleton', race:'Gnomes', class:'Bard',alignment:'Chaotic Neutral',note:'Hes just an idiot. He insists on wearing a bucket as a helmet. Its aperant that he joined the party just as a way to annoy our bard.'},
    {name:'Bardred Mans', race:'dwarf', class:'Monk',alignment:'Lawful Good',note:'Is the mayor of trut. bardred is kind but firm. He delivers justice to the people of trut. He has bin single handedly defending the sheep from the goblins. He seriously needs a vacation '}

  ]);
  const [npc,setnpc]=useState({name:"", race:"", class:"" ,alignment:"", note:""});
  const [showNPCForm, setNPCForm]= useState(true);

  function submit(){
    setnpcArray([...npcArray,{
      name: npc.name,
      race: npc.race,
      class: npc.class,
      alignment: npc.alignment,
      note: npc.note
    }])
    console.log(npcArray)
    console.log(npc)
  }



  function changehandle(e){
  
    setnpc({...npc,[e.target.name]:e.target.value})
    
    }

if(showNPCForm===true){  
  return (
    <div>
  <div style={{display: 'flex' , flexWrap:'wrap',margin:"30px"}}>
    {npcArray.map((npc,index) => (
    
      <CharacterCards key={index} npc={npc} />
   ))
   }
     
      </div>
      <Button variant="primary" className='buttons' onClick={()=>setNPCForm(false)}> Add NPC </Button>{' '}
      </div>
  )
}else{
  return (
    <div>


 <Card >
 <Card.Body>
   <Card.Title>Create NPC</Card.Title>
   <InputGroup className="mb-3">
       <InputGroup.Text >NPC Name</InputGroup.Text>
       <Form.Control aria-label="NPC Name" name='name' value={npc.name}  onChange={(changehandle)} />
  </InputGroup>

    Class:
    <Form.Select  aria-label="Default select example" name="class" value={npc.class} onChange={changehandle}>
    <option>Open this select menu</option>
    <option value="paladin">paladin</option>
    <option value="Wizard">Wizard</option>
    <option value="Barbarian">Barbarian</option>
    <option value="Ranger">Ranger</option>
    <option value="Rogue">Rogue</option>
    <option value="Bard">Bard</option>
    <option value="Cleric">Cleric</option>
    <option value="Druid">Druid</option>
    <option value="Fighter">Fighter</option>
    <option value="Monk">Monk</option>
    <option value="Sorcerer">Sorcerer</option>
    <option value="Warlock">Warlock</option>
  
    </Form.Select>

    Race:
    <Form.Select aria-label="Default select example" name='race' value={npc.race} onChange={changehandle}>
      <option>Open this select menu</option>
      <option value="dwarve">Dwarve</option>
      <option value="Elve">Elve</option>
      <option value="Halfling">Halfling</option>
      <option value="Human">Human</option>
      <option value="Dragonborn">Dragonborn</option>
      <option value="Gnomes">Gnomes</option>
      <option value="Half-Elves">Half-Elves</option>
      <option value="Half-Orcs">Half-Orcs</option>
      <option value="Tieflings">Tieflings</option>
    </Form.Select>

    Alignment:
    <Form.Select aria-label="Default select example" name='alignment' value={npc.alignment} onChange={changehandle}>
      <option>Open this select menu</option>
      <option value="Lawful Good">Lawful Good</option>
      <option value="Neutral Good">Neutral Good</option>
      <option value="Chaotic Good">Chaotic Good</option>
      <option value="Lawful Neutral">Lawful Neutral</option>
      <option value="True Neutral">True Neutral</option>
      <option value="Chaotic Neutral">Chaotic Neutral</option>
      <option value="Lawful Evil">Lawful Evil</option>
      <option value="Neutral Evil">Neutral Evil</option>
      <option value="Chaotic Evil">Chaotic Evil</option>
    </Form.Select>

   <Card.Text>
       <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
         <Form.Label>Notes</Form.Label>
         <Form.Control as="textarea" rows={6} name='note' value={npc.note} onChange={changehandle}  />
     </Form.Group>
   </Card.Text>
     
     <constructor/>
  
 </Card.Body>

 <Card.Body>
 <Button variant="primary" onClick={ ()=> {setNPCForm(true) ; submit();}} > Create </Button>{' '}
 </Card.Body>
</Card>
</div>
  );
  
}
}
export default CharacterLibraryPage;
