import React from 'react';
import WindowTracker from './components/WindowTracker';
import APICall from './components/APICall';
import NestedCheckboxes from './components/NestedCheckboxes';
import Form from './components/Form';
import ReactHookForm from './components/ReactHookForm';
import ReactHookFormWithZod from './components/ReactHookFormWithZod';
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
      {/* <div>
        <h2>Making calls to an API</h2>
        <APICall/>
      </div> */}
      {/* <div>
        <h2>useEffect</h2>
        <button onClick={toggle}>
        Toggle Window Tracker component
      </button>
      {show && <WindowTracker/>}
      </div> */}
      {/* <div>
        <h2>Nested checkboxes</h2>
        <NestedCheckboxes />
      </div> */}
      {/* <div>
        <h2>Form</h2>
        <Form />
      </div> */}
      {/* <div>
        <h2>Form with React Hook Form Library</h2>
        <ReactHookForm />
      </div> */}
      <div>
        <h2>Form with React Hook Form Library</h2>
        <ReactHookFormWithZod />
      </div>
    </>
  )
}

export default App
