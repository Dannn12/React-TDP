import './App.css';


import {
  BrowserRouter as Router, Link, Route, Routes,
} from 'react-router-dom';
import MyComponent from './MyComponent';
import ComponentWithProps from './ComponentWithProps';
import Pet from './Pet.jsx'
import Nav from '.nav.jsx'

const App = () => {
  return (
    <div className="App">
      <Router>
        <header>
          <h1>Welcome to the world of tomorrow!!!</h1>
        </header>
        <nav>
          <Link to="/ComponentWithProps">Component</Link>
          <Link to="/Pet">Pet</Link>
         </nav>
        <Routes>
        <Nav />
        </Routes>
        <MyComponent />
        <ComponentWithProps
          headerProp="Hello my name is dan"
          contentProp="Some really useless content"
          numbercontentProp="1000 Thank yous George for your patience!"
          nonExcistant="       lots of space" />

        <Pet name="Mittens" animal="cat" height="70cm" food="mice" />
        <Pet name="Mittens" animal="cat" height="70cm" food="mice" />
        <Pet name="Mittens" animal="cat" height="70cm" food="mice" />

        <Pet name="Scooby" animal="dog" height="200cm" food="ScoobySnacks" />
        <Pet name="Ghost" anmimal="direwolf" height="240cm" food="Lannisters?" />
        <Pet name="Baa" animal="Sheep" height="220cm" food="Grass" />
      </Router>
    </div>
  );
}





export default App;

