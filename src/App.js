import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  // array
  const players = ["Errichto", "Shakib", "CR7", "Messi"];
  const works = ["cp", "cricket", "football", "football"];
  // const playerName = players.map(player => player);
  // console.log(playerName);

  // array of objects
  const playersObject = [
    { name: "Errichto", work: "cp" },
    { name: "Jon", work: "music" },
    { name: "Petr", work: "cp" }
  ]

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit done <code>src/App.js</code> and save to reload.
        </p>
        <p>I am a react person.</p>

        <Users></Users>

        <Counter></Counter>
        <ul>
          {
            players.map(player => <li>{player}</li>)
          }
          {
            works.map(work => <li>{work}</li>)
          }
        </ul>

        {/* <Person name={players[0]} work={works[0]}></Person> */}

        {/* lets make Person type component for all element of playersObject */}
        {
          playersObject.map(element => <Person player={element}></Person>)
        }
      </header>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const handleIncrease = () => {
    setCount(count + 1);
  };
  const handleDecrease = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleIncrease}> Increase </button>
      {/* <button onClick={handleDecrease}> Decrease </button> */}
      <button onMouseMove={handleDecrease}> Decrease </button>
    </div>
  )
}

function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then(response => response.json())
      .then(data => setUsers(data));
  }, [])
  
  return (
    <div>
      <h3>Dynamic Users: {users.length}</h3>
      <ul>
        {
          users.map(user => <li>{user.name}</li>)
        }
      </ul>
    </div>
  )
}

function Person(params) {
  const personStyle = {
    border: '2px solid yellow',
    borderRadius: '10px',
    backgroundColor: 'Black',
    margin: '10px 10px',
    padding: '10px 10px'
  }
  //console.log(params);
  return (
    <div style={personStyle}>
      <h1>hello {params.player.name}</h1>
      <h3>how is  your {params.player.work}?</h3>
    </div>
  )
}

export default App;
