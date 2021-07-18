import logo from './logo.svg';
import './App.css';
import First from './first';
import Button from './Button';

function App() {
  const hello = <h1>Hello, Good day</h1>
  return (
    <div className="App">
      {hello}
      <First />
     {/* <Button title="click m" /> */}
      <Button title="click" />
      <Button style={{backgroundColor:"red"}} title="click"></Button>
      <h1 style={{color:"green"}}>raju</h1>
    </div>
  );
}

export default App;
    

