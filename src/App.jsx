import React from 'react';
import WindowTracker from './components/WindowTracker';
import './App.css'

function App() {
  const [show, setShow] = React.useState(true)
  function toggle() {
    setShow(prevShow => !prevShow)
  }
  return (
    <>
      <button onClick={toggle}>
        Toggle Window Tracker component
      </button>
      {show && <WindowTracker/>}
    </>
  )
}

export default App
