import {useEffect, useState} from 'react'
import './App.css';

function App() {

  const [message,setMessage] = useState('')
  const [filedUrl,setFiledUrl] = useState('')



  useEffect(()=>{
    fetch(`http://localhost:9000${filedUrl}`)
      .then(response => response.json())
      .then(data => setMessage(data.message) )
  },[filedUrl])


  return (
    <>
    <div>
      <button onClick={()=>{setFiledUrl('/')}}>Home</button>
      <button onClick={()=>{setFiledUrl('/another')}}>Another</button>
    </div>
    <h1>Intro to Express</h1>
    <p>{message}</p>
    </>
  );
}

export default App;