import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorld from './components/HelloWorld';
import HelloWorldUncoverd from './components/HelloWorldUncovered';

import './main.scss';


const App = () => (
  <div>
    <HelloWorld />
    <HelloWorldUncoverd />
  </div>
);

ReactDOM.render(<App />, document.getElementById('app'));
