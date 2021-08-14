import React from 'react';
import './App.css';
import logo from './undies.svg';
import { NavLink, Switch, Route } from 'react-router-dom';

const Navigation = () => (
    <nav>
      <ul>
        <li><NavLink exact activeClassName="current" to='/'>Home</NavLink></li>
        <li><NavLink exact activeClassName="current" to='/about'>About</NavLink></li>
        <li><NavLink exact activeClassName="current" to='/poetry'>Poetry</NavLink></li>
      </ul>
    </nav>
);

const Main = () => (
    <Switch>
      <Route exact path='/' component={Home}></Route>
      <Route exact path='/about' component={About}></Route>
      <Route exact path='/poetry' component={Poetry}></Route>
    </Switch>
);

const Home = () => (
    <div className='home'>
        <h1>An Eve Jobs Fansite</h1>
        <h3>And Haven for poetry enthusiasts and Rosie apologists</h3>
    </div>
);

const About = () => (
    <div className='about'>
      <p>
          I like having my tummy rubbed.
      </p>
    </div>
);

const Poetry = () => (
    <div className='poetry'>
        <h5>Death Haiku</h5>
        <p>
            To much drink last night<br />
            A sad awakening now<br />
            For I now am Rosie <br />
        </p>
    </div>
);

const App = () => (
    <div className='App'>
        <header className="App-header">
            <h1>UndieHacker  <img src={logo} className="App-logo" alt="logo" /></h1>
            <Navigation />
        </header>


    <div className='main-wrapper'>
        <Main />
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
