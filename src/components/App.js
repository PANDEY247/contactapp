import React  from 'react';
import "./App.css";
import Header from './Header';
import AddContact from './AddContact';
import Contactlist from './Contactlist';
import './App.css';
function App() {
  const contacts= 
  [
    {
    id:"1",
    name:"sourabh",
    email:"sp8046904@gmail.com"
    
  },
  {
    id:"2",
    name:"ram",
    email:"ram123@gmail.com"
  }
]
  return (
    <div className='ui container'>
     <Header/>
    <AddContact/>
    <Contactlist contacts={contacts}/>
  
    </div>
    
  );
}

export default App;
