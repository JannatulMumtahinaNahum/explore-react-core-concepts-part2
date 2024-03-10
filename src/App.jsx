import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter';
import Team from './Team';
import Users from './Users';
import Friends from './Friends';



function App() {
  function handleClick(){
    alert('button clicked');

  }

  const handleClick2 = () =>{
    alert ('button 2 clicked')
  }

  const addToFive = (num) => {
    alert (num + 5);
  }

  return (
    <>
      <h1>React Core Concepts Part 2</h1>


      <Friends></Friends>

      <Users></Users>

      <Team></Team>

      <Counter></Counter>




      <button onClick={handleClick}>Click Me</button>

      <button onClick={handleClick2}>Click Here</button>

      <button onClick={() => {alert('button 3 clicked')}}>Button 3</button>

      <button onClick={() => addToFive(10)}>Fourth Button</button>
      
      
    </>
  )
}

export default App
