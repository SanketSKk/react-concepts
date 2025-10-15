import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TabButton from './components/TabButton'

function App() {
  // const [count, setCount] = useState(0)

  let message = "Please click on button";

  const [selectedMessage,setMessage]  = useState(message);

  function handleOnClick(props){
   setMessage(props);
  }
  console.log("loading....");

  return (
    <div>
      
    <TabButton onSelected={()=>handleOnClick("Component")}>Component</TabButton>
    <TabButton onSelected={()=>handleOnClick("Jsx")}>Jsx</TabButton>
    {selectedMessage};
    </div>
  )
}

export default App
