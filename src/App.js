import logo from './undies.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          An Undiespicable Eve Jobs Fansite
        </h1>
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://www.urbandictionary.com/define.php?term=a%20beard"
          target="_blank"
          rel="noopener noreferrer"
        >
          And a Beards are not daughters awareness campaign...
        </a>
      </header>
    </div>
  );
}

export default App;
