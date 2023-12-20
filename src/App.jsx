import React from 'react';
import WindowTracker from './components/WindowTracker';
import APICall from './components/APICall';
import './App.css'

function App() {
  const [show, setShow] = React.useState(true)
  function toggle() {
    setShow(prevShow => !prevShow)
  }
  return (
    <>
      <header>
        <h1>Some React Hooks</h1>
      </header>
      <div>
        <h2>Making calls to an API</h2>
        <APICall/>
      </div>
      <div>
        <h2>useEffect</h2>
        <button onClick={toggle}>
        Toggle Window Tracker component
      </button>
      {show && <WindowTracker/>}
      </div>
    </>
  )
}

export default App
