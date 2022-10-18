import './App.css';
import MyComponent from './MyComponent';
import ComponentWithProps from './ComponentWithProps';
import Pet from './Pet.jsx'

const App = () => {
return (
    <div className="App">
      <MyComponent />
      <ComponentWithProps 
      headerProp= "Hello my name is dan" 
      contentProp= "Some really useless content" 
      numbercontentProp= "1000 Thank yous George for your patience!"
      nonExcistant= "       lots of space"  /> 

      <Pet name= "Mittens" animal="cat" height="70cm" food="mice" />
      <Pet name= "Mittens" animal="cat" height="70cm" food="mice" />
      <Pet name= "Mittens" animal="cat" height="70cm" food="mice" />

      <Pet name= "Scooby" animal="dog" height="200cm" food="ScoobySnacks"/>
      <Pet name= "Ghost" anmimal="direwolf" height="240cm" food="Lannisters?"/>
      <Pet name= "Baa" animal="Sheep" height="220cm" food="Grass"/>

    </div>
  );
}





export default App;

