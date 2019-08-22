import React, {useState} from 'react';
import './App.css';
import Card from './components/Card.js';
import Form from './components/Form.js';
import { Route, Link } from 'react-router-dom';


function App() {
  const [people, setPeople] = useState([
    {id: 0, name:'Harry', email:'HarryP@gHogWart', role:'snitchGolden'},
    {id: 1, name:'DumplingD', email:'TowerMan@hiddendoor', role:'keeperofthetowers'},
  ]);
const addPerson = person => {
  setPeople([...people, {...person, id: Date.now()}]);
}



  return (
    
    <div className="App">
    <Link to='/'>Home         </Link>
    <Link to='/add'>Add Person</Link>
    <Route path='/add'
           render={props => <Form{...props}
           submitPerson={addPerson}/>}/>
     <Route exact path='/'
      render={props => people.map(person => <Card person={person} />)}/>
    </div>
  );
}

export default App;
