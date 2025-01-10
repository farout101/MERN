import { NavLink, Outlet } from 'react-router';
// Navlink is used to better control of the active component of the Navigation bar (add "active" class to the class name)
// Link does not add "active" class to the nav bar component
import './App.css';

function App() {
  return (
    <div className="App">
      <nav>
        <h1>My blog</h1>
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
      </nav>
      <Outlet/>
    </div>
  );
}

export default App;

// The main purpose of the react router is to prevent "Refreshing" of the pages
// The NavLink prop is used to prevent refreshing of the pages during routing.
// Now, we're actually using the client side routing (without server)