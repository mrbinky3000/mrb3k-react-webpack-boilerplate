import React from 'react';
import HelloWorld from './HelloWorld';
import HelloWorldUncoverd from './HelloWorldUncovered';

import '../main.scss';


export default () =>
  <div>
    <HelloWorld />
    <HelloWorldUncoverd />
  </div>;
