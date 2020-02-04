import React from 'react';
import Stats from './Stats.js';

// Here we are using ES6 destructuring. When you have a stateless component, you can add an object in the brackets
// with the props in, rather than calling props.title ect.
const Header = ({players, title}) => {

return (
  <header>
  <Stats players={players}/>
  <h1>{ title }</h1>
  </header>
);
}

export default Header;
