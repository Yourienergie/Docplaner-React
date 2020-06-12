import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';


// var a =['About us', 'Career','Departments'];
var a = [
  {
    text: 'About us'
  },
  {
    text: 'Career'
  },
  {
    text: 'Departments',
    subMenu: ['Marketing', 'Customer', 'IT','Finance']
  }
]
function App() {
  return (
    <div className="App">
<Navbar data = {a} />
    </div>
  );
}

export default App;
