import { useState } from 'react';
import './App.css';

function App() {

  // let name = "Phyo Zaw Linn"

  let [name, setName] = useState("Phyo Zaw Linn"); //useState return an array [getter,setterFun]

  let changeName = () => {
    // name = "Linn Zaw Phyo";
    setName("Linn Zaw Phyo") // This is the async function
    // console.log(name)
  }
  
  return (
    <div className="App">
      <h2>Hello {name}</h2>
      <button onClick={changeName}>Change name</button>
    </div>
  );
}

export default App;