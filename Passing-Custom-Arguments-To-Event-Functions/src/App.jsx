import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TabButton from './component/TabButton';

function App() {
  function handleOnClick(props){
      alert("Handled by " +props);
  }
  return (
   <div>
    <TabButton onSelect={()=>handleOnClick("Component")}>Component</TabButton>
    <TabButton onSelect={()=>handleOnClick("Jsx")}>Jsx</TabButton>
    <TabButton onSelect={()=>handleOnClick("XML")}>XML</TabButton>
    <TabButton onSelect={()=>handleOnClick("Json")}>Json</TabButton>
   </div>

  );
}

export default App
