import React from 'react';
import './App.css';
import logo from './undies.svg';
import Router from "./components/Router";
import Navigation from "./components/Navigation";

const App = () => (
    <div className='App'>
        <header className="App-header">
            <h1>UndieHacker  <img src={logo} className="App-logo" alt="logo" /></h1>
            <Navigation />
        </header>
        <div className='main-wrapper'>
            <Router />
        </div>
    </div>
);

export default App;

// import logo from './undies.svg';
// import './App.css';
//
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1>
//           An Undiespicable Eve Jobs Fansite
//         </h1>
//         <img src={logo} className="App-logo" alt="logo" />
//         <a
//           className="App-link"
//           href="https://www.urbandictionary.com/define.php?term=a%20beard"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           And a Beards are not daughters awareness campaign...
//         </a>
//         <a
//             className="App-link"
//             href="https://www.urbandictionary.com/define.php?term=a%20beard"
//             target="_blank"
//             rel="noopener noreferrer"
//         >
//           As well as a haven for avid poetry enthusiasts
//         </a>
//       </header>
//     </div>
//   );
// }
//
// export default App;
