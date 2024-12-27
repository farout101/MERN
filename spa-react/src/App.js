import { useState } from 'react';
import './App.css';

function App() {

  // let name = "Phyo Zaw Linn"

  let [name, setName] = useState("Phyo Zaw Linn"); //useState return an array [getter,setterFun]

  let [post] = useState([
    {
      id : 1,
      title : "first post"
    },
    {
      id : 2,
      title : "second post"
    },
    {
      id : 3,
      title : "third post"
    }
  ])

  let changeName = () => {
    // name = "Linn Zaw Phyo";
    setName("Linn Zaw Phyo") // This is the async function
    // console.log(name)
  }
  
  return (
    <div className="App">
      <h2>Hello {name}</h2>
      <button onClick={changeName}>Change name</button>
      <h3>Posts</h3>

      <ul>
        {post.map((post)=>(
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>

    </div>
  );
}

export default App;