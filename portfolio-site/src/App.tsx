import './App.css';
import Hangman from './projects/hangman'
import Home from './Home'
import { Routes, Route, Link } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
        <h1 className="Heading">Oliver Looney</h1>
        <h2 className="Headings"><a href = "https://github.com/Oliver-Looney" >github</a></h2>
        <h2 className="Headings"><a href = "https://leetcode.com/OliverJLooney/" >leetcode</a></h2>
        <h2 className="Headings">C.V</h2>
      </header>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/hangman" element={<Hangman/>}/>
        </Routes>
    </div>
  );
}

export default App;
