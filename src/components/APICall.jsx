import {useState} from 'react';

const APICall = () => {
    const [starWarsData, setStarWarsData] = useState([]);
    //console.log("component rendered");
    
// calling fetch when the component renders
//everytime we call fetch is setsStarWarsData
//this updates the state
//and causes re-rending of the component
//calling the fetch again, updating state, rerendering the component

// so this ways makes us stuck in an infinite loop
    fetch("https://swapi.dev/api/people/1/")
    .then((res) => res.json())
    .then((data) => console.log(data));

  return (
    <div>
        <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
    </div>
  )
}

export default APICall