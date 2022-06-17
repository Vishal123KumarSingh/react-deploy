import logo from './logo.svg';
import './App.css';
import image from "./image/ankush.jpg";

function App() {
  return (
    <div className="App">
      <h1>React Website Deployed on github</h1>
      <h2> Created by Ankush </h2>
      <h3> Just For Fun</h3>
      <img src={image} className="image"></img>
    </div>
  );
}

export default App;
